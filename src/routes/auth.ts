import admin from "firebase-admin";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { z } from "zod";
import { Request, Response, Router } from "express";

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

      const user = await admin.auth().createUser({
        email,
        password,
        displayName: `${first_name} ${last_name}`,
        phoneNumber: `+91${phone}`,
      });

      res.status(201).json(user);
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

    const user = await admin.auth().verifyIdToken(token);

    res.json(user);
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
});
