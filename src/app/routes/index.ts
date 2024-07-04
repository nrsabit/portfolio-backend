import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { ExperienceRoutes } from "../modules/experience/experience.routes";
import { BlogRoutes } from "../modules/blog/blog.routes";

const router = Router();

const applicationRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/experiences",
    route: ExperienceRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
];

applicationRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
