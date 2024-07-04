import { z } from "zod";

const createProjectValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    liveLink: z.string(),
    frontendLink: z.string(),
    backendLink: z.string(),
    description: z.string(),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    liveLink: z.string().optional(),
    frontendLink: z.string().optional(),
    backendLink: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const projectValidations = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
