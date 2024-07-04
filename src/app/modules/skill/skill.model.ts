import { model, Schema } from "mongoose";
import { TSkill } from "./skill.interface";

const skillSchema = new Schema<TSkill>(
  {
    name: { type: String, required: true, trim: true },
    level: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export const SkillModel = model<TSkill>("Skill", skillSchema);
