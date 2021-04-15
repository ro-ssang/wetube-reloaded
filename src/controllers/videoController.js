export const deleteVideo = (req, res) => {
  console.log(req.params);
  res.send("Delete Video");
};

export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });

export const search = (req, res) => res.send("Seach Video");

export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });

export const trending = (req, res) => {
  const videos = [
    {
      id: 1,
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
    },
    {
      id: 2,
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
    },
    {
      id: 3,
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
    },
  ];
  res.render("home", { pageTitle: "Home", videos });
};

export const upload = (req, res) => res.send("Upload Video");
