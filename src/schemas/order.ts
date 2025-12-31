import { z } from 'zod';

export const orderSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[0-9+\-\s()]+$/, 'Please enter a valid phone number'),
  address: z
    .string()
    .min(10, 'Address must be at least 10 characters')
    .max(200, 'Address must be less than 200 characters'),
  notes: z
    .string()
    .max(500, 'Notes must be less than 500 characters')
    .optional(),
});

export type OrderFormData = z.infer<typeof orderSchema>;
