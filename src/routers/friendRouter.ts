import { Router } from 'express'

import { addFriend } from '../controller/addFriend'
import { removeFriend } from '../controller/removeFriend'

export const friendRouter = Router();

friendRouter.post('/', addFriend);
friendRouter.delete('/', removeFriend);