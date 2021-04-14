import express from "express";
import { deleteVideo, edit, see, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/:id(\\d+)/edit", edit);

export default videoRouter;
