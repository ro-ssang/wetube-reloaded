export const deleteVideo = (req, res) => {
  console.log(req.params);
  res.send("Delete Video");
};

export const edit = (req, res) => {
  res.send(
    `<!DOCTYPE html><html><head><title>Wetube</title></head><body><h1>Edit video #${req.params.id}</h1><footer>&copy;2021 - All rights reserved</footer></body></html>`
  );
};

export const search = (req, res) => res.send("Seach Video");

export const see = (req, res) => {
  res.send(
    `<!DOCTYPE html><html><head><title>Wetube</title></head><body><h1>Watch video #${req.params.id}</h1><footer>&copy;2021 - All rights reserved</footer></body></html>`
  );
};

export const trending = (req, res) =>
  res.send(
    "<!DOCTYPE html><html><head><title>Wetube</title></head><body><h1>Home</h1><footer>&copy;2021 - All rights reserved</footer></body></html>"
  );

export const upload = (req, res) => res.send("Upload Video");
