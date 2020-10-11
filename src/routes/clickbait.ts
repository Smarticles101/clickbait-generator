import { Router } from "express";
import clickbait from "../clickbait.json";

const clickbaitlist: Array<String> = clickbait.prefixes.flatMap((p) =>
  clickbait.suffixes.map((s) => `${p} ${s}`)
);

const router: Router = Router();

router.get("/random", (req, res) => {
  const id = Math.floor(Math.random() * clickbaitlist.length);

  res.send({"headline": clickbaitlist[id], "id": id});
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send({"headline": clickbaitlist[parseInt(id)], "id": id});
});

export const ClickbaitRouter: Router = router;
