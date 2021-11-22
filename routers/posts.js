import express from "express";
import { createPosts, deletePost, getPosts, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts)

router.post('/', createPosts)

router.post('/update', updatePost)

router.post('/delete', deletePost)

export default router;