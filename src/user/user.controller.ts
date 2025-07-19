import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';

import { UserService } from './user.service';
import { Role } from 'prisma-client';
import { CreateUserDto } from './dto/create-user.dto';
import { Login } from 'src/utils/user.utils';
import { Request, Response } from 'express';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post('register/employee')
  async registerEmployee(
    @Body() userData: CreateUserDto,
    @Res() response: Response,
  ) {
    try {
      const sessionToken = await this.userService.createUser(
        userData,
        Role.EMPLOYEE,
      );
      response.cookie('session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 4 * 60 * 60 * 1000, // 4 hours
        sameSite: 'lax',
      });

      return response
        .status(201)
        .json({ message: 'User registered successfully' });
    } catch (error) {
      console.log('Error during user registration:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Post('register/admin')
  async registerAdmin(
    @Body() userData: CreateUserDto,
    @Res() response: Response,
  ) {
    try {
      const sessionToken = await this.userService.createUser(
        userData,
        Role.ADMIN,
      );
      return response
        .cookie('session', sessionToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 4 * 60 * 60 * 1000, // 4 hours
          sameSite: 'lax',
        })
        .status(201)
        .json({ message: 'User registered successfully' });
    } catch (error) {
      console.log('Error during user registration:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Post('login')
  async loginUser(@Body() userData: Login, @Res() response: Response) {
    try {
      const { email, password } = userData;
      const sessionToken = await this.userService.loginUser(email, password);
      return response
        .cookie('session', sessionToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 4 * 60 * 60 * 1000,
          sameSite: 'none',
        })
        .status(200)
        .json({ message: 'User logged in successfully' });
    } catch (error) {
      console.log('Error during user login:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Put('users/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: Partial<CreateUserDto>,
    @Res() response: Response,
  ) {
    try {
      const updatedUser = await this.userService.updateUser(id, userData);
      return response
        .status(200)
        .json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
      console.log('Error during user update:', error);
      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  @Put('user-organisation-update')
  async updateUserOrganisation(
    @Body('userId') userId: string,
    @Body('organisationId') organisationId: string,
    @Res() response: Response,
  ) {
    try {
      const updatedUser = await this.userService.updateUserOrganisation(
        userId,
        organisationId,
      );
      return response.status(200).json({
        message: 'User organisation updated successfully',
        updatedUser,
      });
    } catch (error) {
      console.log('Error during user organisation update:', error);
      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  @Put('users/role/:id')
  async changeUserRole(
    @Param('id') id: string,
    @Body('role') role: Role,
    @Res() response: Response,
  ) {
    try {
      const updatedUser = await this.userService.changeUserRole(id, role);
      return response
        .status(200)
        .json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
      console.log('Error during user update:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Delete('logout')
  async logout(@Req() request: Request, @Res() response: Response) {
    const authHeader = request.headers.cookie as string;
    const sessionToken = authHeader?.split('=')[1];
    try {
      await this.userService.logoutUser(sessionToken);
      return response
        .cookie('session', '', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'none',
        })
        .status(200)
        .json({ message: 'User logged out successfully' });
    } catch (error) {
      throw new Error('Invalid session token');
    }
  }

  @Delete('users')
  async deleteAllUsers(@Res() response: Response) {
    try {
      await this.userService.deleteAllUsers();
      return response
        .status(200)
        .json({ message: 'All users deleted successfully' });
    } catch (error) {
      console.log('Error during user deletion:', error);
      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  @Get('users')
  async findAllUsers(@Res() response: Response) {
    try {
      const users = await this.userService.getAllUsers();
      return response.status(200).json(users);
    } catch (error) {
      console.log('Error fetching users:', error);
      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  @Delete('users/:id')
  async deleteUserById(@Param('id') id: string, @Res() response: Response) {
    try {
      const deletedUser = await this.userService.deleteUserById(id);
      return response
        .status(200)
        .json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
      console.log('Error during user deletion:', error);
      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  @Get('team/:organisationId')
  async getTeamMembers(
    @Param('organisationId') organisationId: string,
    @Res() response: Response,
  ) {
    try {
      const teamMembers = await this.userService.getTeamMembers(organisationId);
      return response.status(200).json(teamMembers);
    } catch (error) {
      console.log('Error fetching team members:', error);
      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  @Get('team/search/:organisationId')
  async getTeamMemberBySearchTerm(
    @Param('organisationId') organisationId: string,
    @Query('searchTerm') searchTerm: string,
    @Res() response: Response,
  ) {
    try {
      const teamMembers = await this.userService.getTeamMemberBySearchTerm(organisationId, searchTerm);
      return response.status(200).json(teamMembers);
    } catch (error) {
      console.log('Error fetching team members:', error);
      return response.status(500).json({ message: 'Internal server error' });
    }
  }
}
