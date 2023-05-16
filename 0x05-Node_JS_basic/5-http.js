const http = require('http');
const countStudents = require('./3-read_file_async.js');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response
  if (req.url === '/') {
  res.end('Hello Holberton School!');
  }else if (req.url === '/students') {
    countStudents("database.csv")
      .then((data) => {
        res.end(`This is the list of our students:\n${data}`);
      })
      .catch((error) => {
        res.end(`An error occurred: ${error}`);
      });
  }
  else {
    res.end('Not found\n');
  }
});

// Start the server and listen on a port
const hostname = '127.0.0.1';
const port = 1245;
app.listen(port, hostname, () => {
});
module.exports = app;