import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  countryCode: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*\d)(?=.*\W)(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password must contain at least one digit, one special character, one uppercase and one lowercase letter',
  })
  chosenPassword: string;

  @IsString()
  confirmPassword: string;
}
