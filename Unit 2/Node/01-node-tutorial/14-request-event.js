const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  if (req.url === "/about") {
    console.log(req.url);
    res.end("about");
  } else {
    res.end("welcome");
  }
});

server.listen(5000);
