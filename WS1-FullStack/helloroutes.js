const http = require('http');

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === '/homepage') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>HOMEPAGE</h1>');
  } else if (url === '/helloworld') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello world in HTML</h1>');
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('404 - Page Not Found');
  }
});

server.listen(8081, () => {
  console.log('Server with routes is running at http://127.0.0.1:8081/');
});
