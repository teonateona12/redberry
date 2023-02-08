import { z } from "zod";

export const educationScheme = z.object({
  university: z.string().trim().min(2),
  degree: z.string().min(1),
  universityEnd: z.string().trim().min(1),
  educationDesc: z.string().trim().min(1),
});
