import admin from "firebase-admin";
import { z } from "zod";
import { Request, Response, Router } from "express";

import { validateSchema } from "../middlewares/validateSchema";

export const router = Router();

const registerSchema = z.object({
  headers: z.object({
    authorization: z.string(),
  }),
  params: z.object({
    eventId: z.string(),
  }),
});

router.post(
  "/register/:eventId",
  validateSchema(registerSchema),
  async (req: Request, res: Response) => {
    try {
      const { authorization } = req.headers;

      if (!authorization)
        return res.status(401).json({ message: "Unauthorized." });

      const { eventId } = req.params;

      if (!eventId)
        return res.status(400).json({ message: "Event ID is required." });

      const authUser = await admin.auth().verifyIdToken(authorization);

      // get user from db

      const user = await admin
        .firestore()
        .collection("users")
        .doc(authUser.uid)
        .get();

      if (!user.exists) {
        return res.status(404).json({ message: "User not found." });
      }

      const event = await admin
        .firestore()
        .collection("events")
        .doc(eventId)
        .get();

      if (!event.exists) {
        return res.status(404).json({ message: "Event not found." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
);

export default router;
