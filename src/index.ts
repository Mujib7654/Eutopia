import { initializeApp } from "firebase/app";
import express from "express";
import figlet from "figlet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import FirebaseAdmin, { ServiceAccount } from "firebase-admin";
import keys from "./secrets/keys.json";
import firebaseConfig from "./secrets/firebase-config.json";
import { router as AuthRouter } from "./routes/auth";

import router from "./routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT || 8000;

try {
  const serviceAccount: ServiceAccount = {
    projectId: keys.project_id,
    privateKey: keys.private_key,
    clientEmail: keys.client_email,
  };

  FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert(serviceAccount),
  });

  const firebase = initializeApp(firebaseConfig);
} catch (err) {
  console.error(err);
}

app.use("/", router);
app.use("/auth", AuthRouter);

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
