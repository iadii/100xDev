import express from 'express'
import { login, signup } from '../controller/user.controller.js';
const router = express.Router()


router.post('/register', signup)
router.post('/login', login)
router.put('/update-info', login)
export default router;