import express from 'express'
import { login, signup } from '../controller/auth.controller.js';
import { updateInfo } from '../controller/updateProfile.controller.js';
import { bulkQuery } from '../controller/bulk.controller.js';


const router = express.Router()


router.post('/register', signup)
router.post('/login', login)
router.put('/update-info', updateInfo)
router.get('/bulk', bulkQuery)
export default router;