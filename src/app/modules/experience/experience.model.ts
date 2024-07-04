import { Schema, model } from "mongoose";
import { TExperience } from "./experience.interface";

const experienceSchema = new Schema<TExperience>(
  {
    company: { type: String, required: true, trim: true },
    designation: { type: String, required: true },
    workingPeriod: { type: String, required: true },
  },
  { timestamps: true }
);

export const ExperienceModel = model<TExperience>(
  "Experience",
  experienceSchema
);
