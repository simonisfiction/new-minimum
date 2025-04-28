import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname + "/../frontend/")));

app.get('/', (req, res) => {
  console.log(req.headers);
  res.sendFile(path.resolve(__dirname + "/../frontend/finance.html"));
});




app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})