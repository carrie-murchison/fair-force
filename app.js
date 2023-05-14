const express = require('express');
const app = express();

// Define the server endpoints
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
