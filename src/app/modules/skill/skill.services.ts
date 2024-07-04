import { Request } from "express";
import { TSkill } from "./skill.interface";
import { SkillModel } from "./skill.model";
import { fileUploader } from "../../utils/fileUploader";

// creating a new skill
const createSkillService = async (req: Request) => {
  const data: TSkill = req.body;

  if (req?.file) {
    const image = await fileUploader.uploadToCloudinary(req?.file.buffer);
    data.image = image;
  }

  const result = await SkillModel.create(data);
  return result;
};

// retreiving all skills
const getAllSkillssService = async () => {
  const result = await SkillModel.find();
  return result;
};

// deleting a single skill
const deleteSkillService = async (id: string) => {
  const result = await SkillModel.findByIdAndDelete(id);
  return result;
};

export const SkillServices = {
  createSkillService,
  getAllSkillssService,
  deleteSkillService,
};
