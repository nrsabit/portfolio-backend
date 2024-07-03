import { Router } from "express";
import requestValidator from "../../middlewares/requestValidator";
import auth from "../../middlewares/auth";
import { BlogControllers } from "./blog.controllers";
import { blogValidations } from "./blog.validation";

const router = Router();

// getting all blogs
router.get("/", BlogControllers.getAllBlogsController);

// getting single blog
router.get("/:id", BlogControllers.getSingleBlogController);

// creating a new blog
router.post(
  "/create-blog",
  auth(),
  requestValidator(blogValidations.createBlogValidationSchema),
  BlogControllers.createBlogController
);

// deleting a blog
router.delete("/:id", auth(), BlogControllers.deleteBlogController);

// updating a blog
router.patch(
  "/:id",
  auth(),
  requestValidator(blogValidations.updateBlogValidationSchema),
  BlogControllers.updateBlogController
);

export const BlogRoutes = router;
