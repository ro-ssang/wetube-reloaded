import User from "../models/User";

export const edit = (req, res) => res.send("Edit User");

export const getJoin = (req, res) =>
  res.render("join", { pageTitle: "Create Account" });

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const logout = (req, res) => res.send("Logout");

export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: "Create Account",
      errorMessage: "Password confirmation does not match.",
    });
  }
  if (exists) {
    return res.status(400).render("join", {
      pageTitle: "Create Account",
      errorMessage: "This username/email is already taken.",
    });
  }
  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle: "Create Account",
      errorMessage: error._message,
    });
  }
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const usernameExists = await User.exists({ username });
  if (!usernameExists) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "An account with this username does not exists.",
    });
  }
  // check if password correct.
  return res.end();
};

export const remove = (req, res) => res.send("Remove User");

export const see = (req, res) => res.send("See User Profile");
