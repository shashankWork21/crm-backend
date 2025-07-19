import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateScheduleDto {
  @IsNotEmpty()
  @IsString()
  regionId: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(31)
  dayOfMonth: number;

  @IsNotEmpty()
  @IsString()
  createdOrgId: string;
}
