import { z } from "zod";

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const blogValidations = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
