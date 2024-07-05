import { Request } from "express";
import { TProject } from "./project.interface";
import { ProjectModel } from "./project.model";
import { fileUploader } from "../../utils/fileUploader";

// creating a new project
const createProjectService = async (req: Request) => {
  const data: TProject = req.body.body;

  if (req?.file) {
    const image = await fileUploader.uploadToCloudinary(req?.file.buffer);
    data.image = image;
  }

  const result = await ProjectModel.create(data);
  return result;
};

// retreiving all projects
const getAllProjectsService = async () => {
  const result = await ProjectModel.find();
  return result;
};

// getting a single project
const getSingleProjectService = async (id: string) => {
  const result = await ProjectModel.findById(id);
  return result;
};

// updating single project
const updateProjectService = async (id: string, payload: Partial<TProject>) => {
  const result = await ProjectModel.findByIdAndUpdate(id, payload);
  return result;
};

// deleting a single project
const deleteProjectService = async (id: string) => {
  const result = await ProjectModel.findByIdAndDelete(id);
  return result;
};

export const ProjectServices = {
  createProjectService,
  getAllProjectsService,
  getSingleProjectService,
  updateProjectService,
  deleteProjectService,
};
