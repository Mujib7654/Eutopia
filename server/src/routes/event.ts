import admin from "firebase-admin";
import { z } from "zod";
import { Request, Response, Router } from "express";

import { validateSchema } from "../middlewares/validateSchema";

export const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const events = await admin.firestore().collection("events").get();

    const eventsData = events.docs.map((event) => event.data());

    res.status(200).json(eventsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});
