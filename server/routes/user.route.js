import express from "express";
import {
  generateLink,
  getRedirectionLink,
} from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.post("/", generateLink);
userRoute.get("/:link", getRedirectionLink);

export default userRoute;
