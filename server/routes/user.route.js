import express from "express";
import { createLink, getLink } from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.post("/", createLink);
userRoute.get("/:link", getLink);

export default userRoute;
