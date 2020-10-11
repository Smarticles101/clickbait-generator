import { Router } from "express";
import clickbait from "../clickbait.json";

const clickbaitlist: Array<String> = clickbait.prefixes.flatMap((p) =>
  clickbait.suffixes.map((s) => `${p} ${s}`)
);

const router: Router = Router();

router.get("/random", (req, res) => {
  res.send(clickbaitlist[Math.floor(Math.random() * clickbaitlist.length)]);
});

export const ClickbaitRouter: Router = router;
