import requestHandler from "../../utils/requestHandler";
import responseHandler from "../../utils/responseHandler";
import { SkillServices } from "./skill.services";

const createSkillController = requestHandler(async (req, res) => {
  const result = await SkillServices.createSkillService(req);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Skill is Created Successfully",
    data: result,
  });
});

const getAllSkillsController = requestHandler(async (req, res) => {
  const result = await SkillServices.getAllSkillssService();
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Skills retrieved successfully",
    data: result,
  });
});

const deleteSkillController = requestHandler(async (req, res) => {
  const id = req.params.id;
  const result = await SkillServices.deleteSkillService(id);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Skill is Deleted Successfully",
    data: result,
  });
});

export const SkillControllers = {
  createSkillController,
  getAllSkillsController,
  deleteSkillController,
};
