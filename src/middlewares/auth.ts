import { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const { authtoken } = req.headers;
  if (req.headers.authtoken) {
    admin
      .auth()
      .verifyIdToken(authtoken as string)
      .then(() => {
        next();
      })
      .catch(() => {
        res.status(403).send("Unauthorized");
      });
  } else {
    res.status(403).send("Unauthorized");
  }
};
