import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
  {
    name: { type: String, required: true },
    liveLink: { type: String, required: true },
    frontendLink: { type: String, required: true },
    backendLink: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export const ProjectModel = model<TProject>("Project", projectSchema);
