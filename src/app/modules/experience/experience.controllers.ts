import requestHandler from "../../utils/requestHandler";
import responseHandler from "../../utils/responseHandler";
import { ExperienceServices } from "./experience.services";

const createExperienceController = requestHandler(async (req, res) => {
  const result = await ExperienceServices.createExperienceService(req.body);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Experience is Created Successfully",
    data: result,
  });
});

const getAllExperiencesController = requestHandler(async (req, res) => {
  const result = await ExperienceServices.getAllExperieceService();
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Experiences retrieved successfully",
    data: result,
  });
});

const updateExperienceController = requestHandler(async (req, res) => {
  const id = req.params.id;
  const result = await ExperienceServices.updateExperienceService(id, req.body);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Experience is Updated Successfully",
    data: result,
  });
});

const deleteExperienceController = requestHandler(async (req, res) => {
  const id = req.params.id;
  const result = await ExperienceServices.deleteExperienceService(id);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Experience is Deleted Successfully",
    data: result,
  });
});

export const ExperienceControllers = {
  getAllExperiencesController,
  createExperienceController,
  updateExperienceController,
  deleteExperienceController,
};
