import { Server } from "socket.io";

const io = new Server({
    cors: {
        //this means our react application from port 3000
        //can reach our socket server
        origin: "http://localhost:3000",
    },
})

io.on("connection", (socket) => {
    console.log("Someone has been connected")

    socket.on("disconnect", () => {
        console.log("Someone has been disconnected")
    })
});

io.listen(5000)