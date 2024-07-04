import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { ExperienceRoutes } from "../modules/experience/experience.routes";
import { BlogRoutes } from "../modules/blog/blog.routes";
import { SkillRoutes } from "../modules/skill/skill.routes";
import { ProjectRoutes } from "../modules/project/project.routes";

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
  {
    path: "/skills",
    route: SkillRoutes,
  },
  {
    path: "/projects",
    route: ProjectRoutes,
  },
];

applicationRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
