import { Router } from 'express';

const router = Router();

const applicationRoutes = [
  {
    path: '/skills',
    route: {},
  }
];

applicationRoutes.forEach(route => router.use(route.path, route.route));

export default router;