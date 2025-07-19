import { CreateRegionDto } from 'src/region/dto/create-region.dto';
import { createRegionSchema } from './schemas';

export function validateRegionData(data: CreateRegionDto) {
  const result = createRegionSchema.safeParse(data);

  if (!result.success) {
    const resultErrors = {
      regionName: result.error.flatten().fieldErrors.name,
      country: result.error.flatten().fieldErrors.country,
      state: result.error.flatten().fieldErrors.state,
    };
    const errors = {};

    for (const key in resultErrors) {
      if (resultErrors[key] && resultErrors[key].length > 0) {
        errors[key] = resultErrors[key];
      }
    }

    return {
      success: false,
      message: 'Validation failed',
      errors,
    };
  }

  return {
    success: true,
    message: 'Validation successful',
    errors: {},
  };
}
