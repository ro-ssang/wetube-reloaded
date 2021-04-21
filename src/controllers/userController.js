import bcrypt from "bcrypt";
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
  const user = await User.findOne({ username });
  const ok = await bcrypt.compare(password, user.password);
  if (!user) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "An account with this username does not exists.",
    });
  }
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "Wrong password.",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

export const remove = (req, res) => res.send("Remove User");

export const see = (req, res) => res.send("See User Profile");

export const finishGithubLogin = (req, res) => {
  return res.end();
};

export const startGithubLogin = (req, res) => {
  const baseUrl = `https://github.com/login/oauth/authorize`;
  const config = {
    client_id: "acf60c0852f8bf336da2",
    allow_signup: false,
    scope: "read:user user:email",
  };
  const parameters = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${parameters}`;
  return res.redirect(finalUrl);
};
