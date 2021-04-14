import express from "express";
import { deleteVideo, edit, see, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", see);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/:id/edit", edit);

export default videoRouter;
