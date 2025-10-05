const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(`Request received for: ${req.url}`);

  if (req.url === '/') {
    serveFile('index.html', 'text/html', res);
  } else if (req.url === '/about'){
    serveFile('about.html', 'text/html', res);
  } else if (req.url === '/api/users'){
    serveFile('users.json', 'application/json', res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Oops, page not found!</h1><a href="/">Go Home</a>');
  }
});

function serveFile(filePath, contentType, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Server Error');
      console.error(`Error reading ${filePath}:`, err);
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

const PORT = 8081;
server.listen(PORT, () => {
  console.log(`✅ Server is live! Navigate to http://localhost:${PORT}`);
});