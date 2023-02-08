import { z } from "zod";

export const educationScheme = z.object({
  university: z.string().min(2),
  degree: z.string(),
  universityEnd: z.string().min(1),
  educationDesc: z.string().min(1),
});
