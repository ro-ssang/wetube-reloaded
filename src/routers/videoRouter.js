import express from "express";
import { edit, watch } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/edit", edit);
videoRouter.get("/watch", watch);

export default videoRouter;
