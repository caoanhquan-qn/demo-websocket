const http = require('http');
const websocket = require('ws');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('my server!!!');
});

const port = 8000;
const host = 'localhost';

const wss = new websocket.Server({ server });
wss.on('headers', (headers, _req) => {
  console.log(headers);
});
wss.on('connection', (ws, _req) => {
  ws.send('Welcome to the websocket server!!!');
  ws.on('message', (msg) => {
    console.log(msg.toString('utf8'));
  });
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
