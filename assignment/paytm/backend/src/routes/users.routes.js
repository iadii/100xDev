import express from 'express'
import { login, signup, updateInfo } from '../controller/user.controller.js';
const router = express.Router()


router.post('/register', signup)
router.post('/login', login)
router.put('/update-info', updateInfo)
export default router;