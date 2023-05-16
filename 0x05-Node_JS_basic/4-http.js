const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response
  res.end('Hello Holberton School!');
});

// Start the server and listen on a port
const hostname = '127.0.0.1';
const port = 1245;
app.listen(port, hostname, () => {
});
module.exports = app;