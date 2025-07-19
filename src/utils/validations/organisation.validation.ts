import { CreateOrganisationDto } from 'src/organisation/dtos/create-organisation.dto';
import { createOrganisationSchema } from './schemas';

export function validateOrganisationData(data: CreateOrganisationDto) {
  const result = createOrganisationSchema.safeParse(data);

  if (!result.success) {
    const resultErrors = {
      orgName: result.error.flatten().fieldErrors.name,
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
