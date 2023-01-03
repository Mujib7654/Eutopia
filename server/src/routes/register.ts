import admin from "firebase-admin";
import { any, string, z } from "zod";
import { Request, Response, Router } from "express";

import { validateSchema } from "../middlewares/validateSchema";

export const router = Router();

const registerSchema = z.object({
  query: z.object({
    eventId: string(),
  }),
  body: z.object({
    details: any(),
  }),
});

router.post(
  "/",
  validateSchema(registerSchema),
  async (req: Request, res: Response) => {
    try {
      const { authorization } = req.headers;

      if (!authorization)
        return res.status(401).json({ message: "Unauthorized." });

      const { eventId } = req.query;
      const { details } = req.body;

      if (!eventId)
        return res.status(400).json({ message: "Event ID is required." });

      const token = (authorization as string).split(" ")[1];

      const authUser = await admin.auth().verifyIdToken(token);

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
        .where("id", "==", eventId)
        .get();

      if (!event) {
        return res.status(404).json({ message: "Event not found." });
      }

      // check if user has already registered for the event
      const userEntries = user.data()?.entries || [];

      const userEntry = userEntries?.find(
        (entry: any) => entry.eventId === eventId
      );

      if (userEntry) {
        return res.status(400).json({ message: "Already registered." });
      }

      // check if event has already registered the user
      const eventEntries = event.docs[0]?.data().entries || [];

      const eventEntry = eventEntries?.find(
        (entry: any) => entry.userId === authUser.uid
      );

      if (eventEntry) {
        return res.status(400).json({ message: "Already registered." });
      }

      try {
        // update event
        await admin
          .firestore()
          .collection("events")
          .where("id", "==", eventId)
          .limit(1)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              doc.ref.update({
                entries: admin.firestore.FieldValue.arrayUnion({
                  userId: authUser.uid,
                  details,
                }),
              });
            });
          });
        await admin
          .firestore()
          .collection("users")
          .doc(authUser.uid)
          .update({
            entries: admin.firestore.FieldValue.arrayUnion({
              eventId,
              details,
            }),
          });

        res.status(200).json({ message: "Registered successfully." });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
);

export default router;
