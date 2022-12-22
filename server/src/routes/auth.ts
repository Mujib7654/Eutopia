import admin from "firebase-admin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { z } from "zod";
import { Request, Response, Router } from "express";
import { getHouse } from "../helpers/getHouse";

import { validateSchema } from "../middlewares/validateSchema";

export const router = Router();

const registerSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
    first_name: z.string().min(2).max(20),
    last_name: z.string().min(2).max(20),
    phone: z.string().length(10),
  }),
});

router.post(
  "/register",
  validateSchema(registerSchema),
  async (req: Request, res: Response) => {
    try {
      const { email, password, first_name, last_name, phone } = req.body;

      // generate a random house for the user
      const house = getHouse();

      const authUser = await admin.auth().createUser({
        email,
        password,
        displayName: `${first_name} ${last_name}`,
        phoneNumber: `+91${phone}`,
      });

      try {
        const user = {
          id: authUser.uid,
          email,
          first_name,
          last_name,
          phone,
          house,
        };

        await admin.firestore().collection("users").doc(authUser.uid).set(user);

        const response = { ...authUser, user };

        res.status(201).json(response);
      } catch (error) {
        console.error(error);
        await admin.auth().deleteUser(authUser.uid);
        return res.status(500).json({ message: "Internal server error." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
);

const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
  }),
});

router.post(
  "/login",
  validateSchema(loginSchema),
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const user = await signInWithEmailAndPassword(getAuth(), email, password);

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
);

router.get("/user", async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      return res.status(401).json({ message: "Unauthorized." });

    const token = (authorization as string).split(" ")[1];

    const authUser = await admin.auth().verifyIdToken(token);

    const user = await admin
      .firestore()
      .collection("users")
      .doc(authUser.uid)
      .get();

    const response = { ...authUser, user: user.data() };

    res.json(response);
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
});
