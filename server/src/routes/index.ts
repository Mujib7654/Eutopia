import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to Eutopia!");
});

export default router;
