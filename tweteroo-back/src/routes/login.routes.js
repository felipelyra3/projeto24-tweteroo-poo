import express from 'express';
import { UsernameAvatarValidation } from '../middlewares/validation.middlewares.js';
import { SignUp } from '../controllers/login.controllers.js';

const router = express.Router();

router.post('/', UsernameAvatarValidation, SignUp);

export default router;