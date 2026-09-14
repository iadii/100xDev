import express from 'express'
import cors from 'cors'
import userRouter from './routes/users.routes.js'
import healthRouter from './routes/health.routes.js'
const app = express();


app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));

const prefix = '/api/v1';

// auth
app.use(`${prefix}/auth`, userRouter)
app.use(`${prefix}/health`, healthRouter)



export default app;     