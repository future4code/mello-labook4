import { Router } from 'express'

import { createPost } from '../controller/createPost'
import { getAllPosts } from '../controller/getAllPosts';

export const postRouter = Router();

postRouter.post('/', createPost);
postRouter.get('/', getAllPosts);