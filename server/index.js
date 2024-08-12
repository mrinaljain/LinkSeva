import express from "express";
import userRoute from "./routes/user.route.js";
// create server

const app = express();
// convert serelised data into Json
app.use(express.json());
// Use express.urlencoded() to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Default ping
// app.get("/ping", (req, res) => {
//   res.json({ status: true, message: "Working fine ..!", data: {} });
// });

app.use("/api/link", userRoute);

//listen at some port

app.listen(8080, () => {
  console.log("App is live on localhost 8080");
});
