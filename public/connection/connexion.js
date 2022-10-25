//connexion de l'utilisateur

const socket = io();
    socket.emit("my_event", { name: "ana" });
    socket.on("my_event_from_server", (data) => {
      console.log(data);
    });