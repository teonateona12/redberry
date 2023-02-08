import { z } from "zod";

export const personalSchema = z.object({
  firstName: z
    .string()
    .min(2)
    .regex(/^[ა-ჰ]+$/g),
  lastName: z
    .string()
    .min(2)
    .regex(/^[ა-ჰ]+$/g),
  email: z.string().endsWith("@redberry.ge"),
  number: z
    .string()
    .min(2)
    .regex(/^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/),
  about: z.string().optional(),
  image: z.instanceof(File),
});
