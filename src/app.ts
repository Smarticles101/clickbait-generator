import express from "express";
import { ClickbaitRouter } from "./routes/clickbait";
const port = process.env.PORT || 8080;

const app = express();
app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});

app.use("/api/", ClickbaitRouter);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
