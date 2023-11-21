import express from "express";
import { UsersRoutes } from "../modules/User/user.route";
import { TeamsRoutes } from "../modules/Teams/team.route";



const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UsersRoutes
  },
  {
    path: "/teams",
    route: TeamsRoutes
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;