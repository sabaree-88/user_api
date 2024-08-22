import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connection } from "./db.js";
import router from "./routes/userRoutes.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
  res.json({ message: "User API" });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running.`);
});
