import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>I still love you.</h1>");
};
const handleLogin = (req, res) => {
  return res.send({ messeage: "Login here." });
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server Listening on http://localhost:4000`);

app.listen(PORT, handleListening);
