const express = require("express");
const http = require("http"); //module native de nodeJS
const { Server } = require("socket.io"); //recupération d'une class de socket.io
const cors = require("cors");
const NotFoundError = require("./errors/not-found");
const userRouter = require("./api/users/users.router");
const articleRouter = require("./api/articles//article.router")
const usersController = require("./api/users/users.controller");
const authMiddleware = require("./middlewares/auth");
// //require("./api/articles/articles.schema"); // temporaire
const app = express();

const server = http.createServer(app); // on va écouter le port sur server
const io = new Server(server); //connection en temp réel su l'application

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("my_event", (data) => {
    console.log(data);
  });
  socket.emit("my_event_from_server", { test: "foo" });
});

// app.use((req, res, next) => {
//   req.io = io;
//   next();
// });

app.use(cors());
app.use(express.json());

app.use("/api/users", authMiddleware, userRouter);
app.use("/api/articles", articleRouter);
app.post("/login", usersController.login);

app.use("/", express.static("public")); // va lire tout les fichier static dans public

app.use((req, res, next) => {
  next(new NotFoundError());
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message;
  res.status(status);
  res.json({
    status,
    message,
  });
});

module.exports = {
  app, // pour les test unitaire
  server, //sera utilisé dans le www.app.js
};
