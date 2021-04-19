export const edit = (req, res) => res.send("Edit User");

export const getJoin = (req, res) =>
  res.render("join", { pageTitle: "Create Account" });

export const login = (req, res) => res.send("Login");

export const logout = (req, res) => res.send("Logout");

export const postJoin = (req, res) => {
  console.log(req.body);
  return res.end();
};

export const remove = (req, res) => res.send("Remove User");

export const see = (req, res) => res.send("See User Profile");
