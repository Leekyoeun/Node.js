const http = require("http");
const fs = require("fs").promises;

http
    .createServer(async(req, res) => {
        try {
            const data = await fs.readFile("./server2.html");
            res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
            res.end(data);
        } catch (err) {
            console.error(err);
            res.writeHeade(500, { "Content-type": "text/plain; charset=utf-8" });
            res.end(err.message);
        }
    })
    .listen(8081, () => {
        console.log("8081번 포트에서 대기중입니다!");
    });