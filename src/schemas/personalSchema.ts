import { z } from "zod";

export const personalSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2)
    .regex(/^[ა-ჰ]+$/g),
  lastName: z
    .string()
    .trim()
    .min(2)
    .regex(/^[ა-ჰ]+$/g),
  email: z.string().endsWith("@redberry.ge"),
  number: z.string().trim().min(2),
  about: z.string().optional(),
});
