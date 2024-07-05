import { NextFunction, Request, Response, Router } from "express";
import requestValidator from "../../middlewares/requestValidator";
import auth from "../../middlewares/auth";
import { fileUploader } from "../../utils/fileUploader";
import { ProjectControllers } from "./project.controllers";
import { projectValidations } from "./project.validation";

const router = Router();

// getting all projects
router.get("/", ProjectControllers.getAllProjectsController);

// getting single project
router.get("/:id", ProjectControllers.getSingleProjectController);

// creating a new project
router.post(
  "/",
  auth(),
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = projectValidations.createProjectValidationSchema.parse({
      body: JSON.parse(req.body.data),
    });
    return ProjectControllers.createProjectController(req, res, next);
  }
);

// updating a project
router.patch(
  "/:id",
  auth(),
  requestValidator(projectValidations.updateProjectValidationSchema),
  ProjectControllers.updateProjectController
);

// deleting a project
router.delete("/:id", auth(), ProjectControllers.deleteProjectController);

export const ProjectRoutes = router;
