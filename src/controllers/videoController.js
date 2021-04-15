export const deleteVideo = (req, res) => {
  console.log(req.params);
  res.send("Delete Video");
};

export const edit = (req, res) => res.render("edit");

export const search = (req, res) => res.send("Seach Video");

export const see = (req, res) => res.render("watch");

export const trending = (req, res) => res.render("home");

export const upload = (req, res) => res.send("Upload Video");
