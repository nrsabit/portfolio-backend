import { z } from "zod";

const createExperienceValidationSchema = z.object({
  body: z.object({
    company: z.string(),
    designation: z.string(),
    workingPeriod: z.string(),
  }),
});

const updateExperienceValidationSchema = z.object({
  body: z.object({
    company: z.string().optional(),
    designation: z.string().optional(),
    workingPeriod: z.string().optional(),
  }),
});

export const experienceValidations = {
  createExperienceValidationSchema,
  updateExperienceValidationSchema,
};
