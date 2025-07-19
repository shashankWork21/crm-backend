import { Injectable } from '@nestjs/common';
import { Role } from 'prisma-client';
import { DbService } from 'src/db/db.service';
import { CreateUserDto } from './dto/create-user.dto';
import { comparePassword, hashPassword } from 'src/utils/password-utils';
import { SessionService } from 'src/session/session.service';
import { validateUserData } from 'src/utils/validations/user.validation';

@Injectable()
export class UserService {
  constructor(
    private readonly db: DbService,
    private readonly sessionService: SessionService,
  ) { }

  private getUserSelect() {
    return {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      countryCode: true,
      phoneNumber: true,
      role: true,
      createdAt: true,
      updatedAt: true,
      organisationId: true,
      organisation: {
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    };
  }

  async createUser(data: CreateUserDto, role: Role) {
    const { chosenPassword, confirmPassword } = data;

    const { success, errors } = validateUserData(data);
    if (!success) {
      throw new Error(JSON.stringify(errors));
    }

    const existingUser = await this.findUserByEmail(data.email);
    if (existingUser) {
      throw new Error(
        JSON.stringify({
          email: ['Email already exists. Please enter another email id'],
        }),
      );
    }

    if (chosenPassword !== confirmPassword) {
      throw new Error(
        JSON.stringify({ confirmPassword: ['Passwords do not match'] }),
      );
    }
    const password = await hashPassword(chosenPassword);
    const user = await this.db.user.create({
      data: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        countryCode: data.countryCode,
        password,
        role,
      },
    });
    const sessionToken = await this.sessionService.createSession(user);
    return sessionToken;
  }

  async updateUserOrganisation(userId: string, organisationId: string) {
    const user = await this.db.user.update({
      where: { id: userId },
      data: { organisationId },
      select: this.getUserSelect(),
    });
    return user;
  }

  async findUserByEmail(email: string) {
    const user = await this.db.user.findUnique({
      where: { email },
    });
    return user;
  }

  async loginUser(email: string, password: string) {
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new Error(
        JSON.stringify({
          email: ['This email is not registered.'],
        }),
      );
    }
    const verifyPassword = await comparePassword(password, user.password);
    if (!verifyPassword) {
      throw new Error(
        JSON.stringify({
          password: ['Incorrect password. Please try again.'],
        }),
      );
    }
    const sessionToken = await this.sessionService.createSession(user);
    return sessionToken;
  }

  async updateUser(id: string, data: Partial<CreateUserDto>) {
    const user = await this.db.user.update({
      where: { id },
      data,
      select: this.getUserSelect(),
    });
    return user;
  }

  async changeUserRole(id: string, role: Role) {
    const user = await this.db.user.findUnique({
      where: { id },
    });
    if (user?.role === Role.ADMIN && role !== Role.ADMIN) {
      const adminCount = await this.db.user.count({
        where: {
          role: Role.ADMIN,
          organisationId: user.organisationId as string,
        },
      });
      if (adminCount === 1) {
        throw new Error(
          JSON.stringify({
            _form: [
              'At least one admin is required in the organisation. Cannot change role.',
            ],
          }),
        );
      }
    }
    const updatedUser = await this.db.user.update({
      where: { id },
      data: { role },
      select: this.getUserSelect(),
    });
    return updatedUser;
  }

  async logoutUser(sessionToken: string) {
    try {
      await this.sessionService.deleteSessionFromToken(sessionToken);
    } catch (error) {
      console.log('Error during user logout:', error);
      throw new Error('Invalid session token');
    }
  }

  async deleteAllUsers() {
    try {
      await this.db.user.deleteMany({});
      return { message: 'All users deleted successfully' };
    } catch (error) {
      console.log('Error deleting all users:', error);
      throw new Error('Failed to delete all users');
    }
  }

  async getAllUsers() {
    return this.db.user.findMany({
      select: this.getUserSelect(),
    });
  }

  async deleteUserById(id: string) {
    const user = await this.db.user.delete({
      where: { id },
      select: this.getUserSelect(),
    });
    return user;
  }

  async getTeamMembers(organisationId: string) {
    return this.db.user.findMany({
      where: { organisationId },
      select: this.getUserSelect(),
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async getTeamMemberBySearchTerm(organisationId: string, searchTerm: string) {
    return this.db.user.findMany({
      where: {
        organisationId,
        OR: [
          { firstName: { contains: searchTerm, mode: 'insensitive' } },
          { lastName: { contains: searchTerm, mode: 'insensitive' } },
          { email: { contains: searchTerm, mode: 'insensitive' } },
        ],
      },
      select: this.getUserSelect(),
    });
  }
}
