import express from 'express';
import path from 'path';
const app = express();
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
// Listen for incoming requests
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});
