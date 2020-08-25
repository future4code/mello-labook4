import { Router } from 'express'

import { createPost } from '../endpoints/createPost'

export const postRouter = Router();

postRouter.post('/', createPost);