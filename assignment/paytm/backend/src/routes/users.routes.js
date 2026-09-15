import express from 'express'
import { login, signup } from '../controller/auth.controller.js';
import { updateInfo } from '../controller/updateProfile.controller.js';

const router = express.Router()


router.post('/register', signup)
router.post('/login', login)
router.put('/update-info', updateInfo)
export default router;