const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>");
    res.end("<p>Hello Server!</p>");
});
server.listen(8000);

server.on("listening", () => {
    console.log("8000번 포트에서 대기중입니다!");
});
server.on("error", (error) => {
    console.error(error);
});