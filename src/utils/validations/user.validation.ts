import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { userSchema } from './schemas';

export function validateUserData(data: CreateUserDto) {
  const result = userSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: 'Validation failed',
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    success: true,
    message: 'Validation successful',
    errors: {},
  };
}
