import { BranchType, ContactType, LeadSegment, TagType } from 'prisma-client';
import { z } from 'zod';

export const userSchema = z.object({
  firstName: z.string().min(1, 'Name is required'),
  lastName: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email address'),
  countryCode: z.string().min(1, 'Country code is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  chosenPassword: z
    .string()
    .regex(/^(?=.*\d)(?=.*\W)(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message:
        'Password must contain at least one digit, one special character, one uppercase and one lowercase letter',
    })
    .min(8, 'Password must be at least 8 characters long'),
});

export const updateUserSchema = z
  .object({
    firstName: z.string().min(1, 'First name cannot be empty').optional(),
    lastName: z.string().min(1, 'Last name cannot be empty').optional(),
    email: z.email('Invalid email address').optional(),
    countryCode: z.string().min(1, 'Country code cannot be empty').optional(),
    phoneNumber: z.string().min(1, 'Phone number cannot be empty').optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
    path: ['_errors'],
  });

export const createOrganisationSchema = z.object({
  name: z.string().min(1, 'Organisation name is required'),
});

export const createRegionSchema = z.object({
  name: z.string().min(1, 'Region name is required'),
  state: z.string().min(1, 'State is required'),
  country: z.string().min(1, 'Country is required'),
});

export const createBranchSchema = z.object({
  address: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().optional(),
  type: z.enum(BranchType, {
    error: () => ({
      message: 'Branch type must be either HEADQUARTERS or BRANCH',
    }),
  }),
});

export const tagSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  tagType: z.enum(TagType, { message: 'Invalid tag type' }),
  createdOrganisationId: z.string().min(1, 'Organisation ID is required'),
});

export const createContactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  phoneNumber: z.string().min(1, { message: 'Phone number is required' }),
  branchId: z.string().min(1, { message: 'Branch ID is required' }),
  contactType: z.enum(ContactType, { message: 'Invalid contact type' }),
  contactOrgId: z
    .string()
    .min(1, { message: 'Contact Organization ID is required' }),
});
