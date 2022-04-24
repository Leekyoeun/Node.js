const http = require("http");

http
    .createServer((req, res) => {
        res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        res.write("<h1>Hello Node!</h1>");
        res.end("<p>Hello Server!</p>");
    })
    .listen(8000, () => {
        console.log("8000번 포트에서 서버 대기 중입니다!");
    });

http
    .createServer((req, res) => {
        res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        res.write("<h1>Hello Node!</h1>");
        res.end("<p>Hello Server!</p>");
    })

.listen(8001, () => {
    console.log("8001번 포트에서 서버 대기 중입니다!");
});