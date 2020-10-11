import express from "express";
import { ClickbaitRouter } from "./routes/clickbait";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});

app.use("/api/", ClickbaitRouter);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
