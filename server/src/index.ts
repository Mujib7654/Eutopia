import { initializeApp } from "firebase/app";
import express from "express";
import figlet from "figlet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import FirebaseAdmin, { ServiceAccount } from "firebase-admin";
import { router as AuthRouter } from "./routes/auth";
import { router as ResgisterRouter } from "./routes/register";
import { router as EventRouter } from "./routes/event";

import router from "./routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT || 8000;

const FirebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

console.log(FirebaseConfig);

try {
  const serviceAccount: ServiceAccount = {
    projectId: process.env.PROJECT_ID,
    privateKey: process.env.PRIVATE_KEY,
    clientEmail: process.env.CLIENT_EMAIL,
  };

  console.log(serviceAccount);

  FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert(serviceAccount),
  });

  initializeApp(FirebaseConfig);
} catch (err) {
  console.error(err);
}

app.use("/", router);
app.use("/auth", AuthRouter);
app.use("/register", ResgisterRouter);
app.use("/event", EventRouter);

app.listen(PORT, () => {
  try {
    figlet.text("Eutopia", (err, data) => {
      console.log(data);
      console.log(`\nServer listening on port ${PORT}!`);
    });
  } catch (err) {
    console.log(`Eutopia server listening on port ${PORT}!`);
  }
});
