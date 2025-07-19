import { TagDto } from 'src/tags/dtos/tag.dto';
import { tagSchema } from './schemas';

export function validateTag(data: TagDto) {
  const result = tagSchema.safeParse(data);

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
