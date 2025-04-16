
const http = require('http');
const port = 3000;

// Create a server that sends a response for every incoming request
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello, Node.js World!\n');
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});