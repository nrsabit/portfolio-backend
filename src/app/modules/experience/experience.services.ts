import { TExperience } from "./experience.interface";
import { ExperienceModel } from "./experience.model";

const createExperienceService = async (payload: TExperience) => {
  const result = await ExperienceModel.create(payload);
  return result;
};

const getAllExperieceService = async () => {
  const result = await ExperienceModel.find();
  return result;
};

const updateExperienceService = async (
  id: string,
  payload: Partial<TExperience>
) => {
  const result = await ExperienceModel.findByIdAndUpdate(id, payload);
  return result;
};

const deleteExperienceService = async (id: string) => {
  const result = await ExperienceModel.findByIdAndDelete(id);
  return result;
};

export const ExperienceServices = {
  getAllExperieceService,
  createExperienceService,
  updateExperienceService,
  deleteExperienceService,
};
