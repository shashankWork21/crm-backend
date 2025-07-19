import { CreateContactDto } from './../../contact/dtos/create-contact.dto';

import { createContactSchema } from './schemas';

export function validateContactData(data: CreateContactDto) {
  const result = createContactSchema.safeParse(data);

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
