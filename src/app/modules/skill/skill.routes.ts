import { NextFunction, Request, Response, Router } from "express";
import auth from "../../middlewares/auth";
import { SkillControllers } from "./skill.controllers";
import { fileUploader } from "../../utils/fileUploader";
import { skillValidations } from "./skill.validation";

const router = Router();

// getting all skills
router.get("/", SkillControllers.getAllSkillsController);

// creating a new skill
router.post(
  "/",
  auth(),
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = skillValidations.createSkillValidationSchema.parse({
      body: JSON.parse(req.body.data),
    });
    return SkillControllers.createSkillController(req, res, next);
  }
);

// deleting a skill
router.delete("/:id", auth(), SkillControllers.deleteSkillController);

export const SkillRoutes = router;
