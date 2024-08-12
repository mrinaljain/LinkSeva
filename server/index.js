import express from "express";
import userRoute from "./routes/user.route.js";
import { connectDb } from "./config/dbConnect.js";
import cors from "cors";
import "dotenv/config";
// create server
const app = express();
// enable CORS inside app
app.use(cors());
// convert serelised data into Json
app.use(express.json());

// Use express.urlencoded() to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Default ping
app.get("/ping", (req, res) => {
  res.json({ status: true, message: "Working fine ..!", data: {} });
});

app.use("/api/link", userRoute);

//listen at some port

app.listen(8080, async () => {
  // Connect to MongoDB
  await connectDb();
  console.log("App is live on localhost 8080");
});
