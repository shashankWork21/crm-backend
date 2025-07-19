import { Response } from 'express';
import { Role, User } from 'prisma-client';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export async function registerUserFlow(
  userData: CreateUserDto,
  response: Response,
  role: Role,
  createFunction: (data: CreateUserDto, role: Role) => Promise<string | User>,
) {
  try {
    const sessionToken = await createFunction(userData, role);
    return response
      .cookie('session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 4 * 60 * 60 * 1000, // 4 hours
        sameSite: 'none',
      })
      .status(201)
      .json({ message: 'User registered successfully' });
  } catch (error) {
    console.log('Error during user registration:', error);
    return response.status(500).json({ message: 'Internal server error' });
  }
}

export interface Login {
  email: string;
  password: string;
}
