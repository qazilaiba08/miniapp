import express from "express";
import protect from "../Middlewear/authMiddlewear.js";
import { createPost, getPosts } from "../Controllers/postController.js";

const router = express.Router();

router.route("/").get(getPosts).post(protect, createPost);

export default router;
