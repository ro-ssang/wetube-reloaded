export const deleteVideo = (req, res) => {
  console.log(req.params);
  res.send("Delete Video");
};

export const edit = (req, res) => {
  console.log(req.params);
  res.send("Edit Video");
};

export const search = (req, res) => res.send("Seach Video");

export const see = (req, res) => {
  res.send(`Watch Video #${req.params.id}`);
};

export const trending = (req, res) => res.send("Home Page Videos");

export const upload = (req, res) => res.send("Upload Video");
