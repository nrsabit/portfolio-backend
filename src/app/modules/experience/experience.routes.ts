import { Router } from "express";
import requestValidator from "../../middlewares/requestValidator";
import auth from "../../middlewares/auth";
import { ExperienceControllers } from "./experience.controllers";
import { experienceValidations } from "./exprerience.validation";

const router = Router();

// getting all experiences
router.get("/", ExperienceControllers.getAllExperiencesController);

// creating a new experience
router.post(
  "/create-experience",
  auth(),
  requestValidator(experienceValidations.createExperienceValidationSchema),
  ExperienceControllers.createExperienceController
);

// deleting an experience
router.delete("/:id", auth(), ExperienceControllers.deleteExperienceController);

// updating an experience
router.patch(
  "/:id",
  auth(),
  requestValidator(experienceValidations.updateExperienceValidationSchema),
  ExperienceControllers.updateExperienceController
);

export const ExperienceRoutes = router;
