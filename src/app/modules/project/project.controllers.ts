import requestHandler from "../../utils/requestHandler";
import responseHandler from "../../utils/responseHandler";
import { ProjectServices } from "./project.services";

const createProjectController = requestHandler(async (req, res) => {
  const result = await ProjectServices.createProjectService(req);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Project is Created Successfully",
    data: result,
  });
});

const getAllProjectsController = requestHandler(async (req, res) => {
  const result = await ProjectServices.getAllProjectsService();
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Projects retrieved successfully",
    data: result,
  });
});

const getSingleProjectController = requestHandler(async (req, res) => {
  const id = req.params.id;
  const result = await ProjectServices.getSingleProjectService(id);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Project is Retrieved Successfully",
    data: result,
  });
});

const updateProjectController = requestHandler(async (req, res) => {
  const id = req.params.id;
  const result = await ProjectServices.updateProjectService(id, req.body);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Project is Updated Successfully",
    data: result,
  });
});

const deleteProjectController = requestHandler(async (req, res) => {
  const id = req.params.id;
  const result = await ProjectServices.deleteProjectService(id);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Project is Deleted Successfully",
    data: result,
  });
});

export const ProjectControllers = {
  createProjectController,
  getAllProjectsController,
  getSingleProjectController,
  updateProjectController,
  deleteProjectController,
};
