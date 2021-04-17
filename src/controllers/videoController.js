import Video from "../models/Video";

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const postUpload = (req, res) => {
  const { title, description, hashtags } = req.body;
  const video = new Video({
    title,
    description,
    hashtags: hashtags
      .split(",")
      .map((word) =>
        word.trim()[0] === "#" ? word.trim() : "#" + word.trim()
      ),
    meta: {
      views: 0,
      rating: 0,
    },
    createdAt: Date.now(),
  });
  console.log(video);
  return res.redirect("/");
};

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};
