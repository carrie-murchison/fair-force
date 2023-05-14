import express from 'express';
import * as path from 'path';
declare const __dirname: string

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(new URL('../public', import.meta.url).pathname));


app.get("/", (req: Request, res: Response) => { ... };

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
