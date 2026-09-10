import express from 'express'
import { signup } from '../controller/user.controller.js';
const router = express.Router()


router.post('/register', signup)
export default router;