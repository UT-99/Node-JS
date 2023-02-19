const http = require("http");

http.createServer((req, resp) => {
    resp.write("<h1>Hello this the response from HTTP. </h1>.");
    resp.write(req.url);
    resp.end();
  })
  .listen(4500);
