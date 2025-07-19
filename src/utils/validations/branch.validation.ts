import { CreateBranchDto } from 'src/branch/dto/branch.dto';
import { createBranchSchema } from './schemas';

export function validateBranchData(data: CreateBranchDto) {
  const result = createBranchSchema.safeParse(data);

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
