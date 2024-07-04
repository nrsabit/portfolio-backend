import { z } from "zod";

const createSkillValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    level: z.enum(["Expertise", "Intermediate", "Familiar"]),
  }),
});

export const skillValidations = {
  createSkillValidationSchema,
};
