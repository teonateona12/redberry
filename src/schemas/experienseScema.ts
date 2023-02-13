import { z } from "zod";

export const experienceScheme = z.object({
  experienceData: z.array(
    z.object({
      position: z.string().trim().min(2),
      employer: z.string().trim().min(2),
      description: z.string().trim().min(1),
      startTime: z.string().min(1),
      endTime: z.string().min(1),
    })
  ),
});
