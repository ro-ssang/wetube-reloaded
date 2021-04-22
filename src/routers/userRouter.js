import express from "express";
import {
  edit,
  finishGithubLogin,
  logout,
  see,
  startGithubLogin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/logout", logout);
userRouter.get("/:id", see);

export default userRouter;
