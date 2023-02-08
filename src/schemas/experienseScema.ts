import { z } from "zod";

export const experienceScheme = z.object({
  position: z.string().min(2),
  employer: z.string().min(2),
  description: z.string().min(1),
  startTime: z.string(),
  endTime: z.string(),
});
