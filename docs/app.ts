import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../src')));

// Route for the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
