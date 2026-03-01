import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './db/index.js'

dotenv.config({
    path: './src/.env'
})
const PORT = process.env.PORT;

connectDB()
    .then(() => {
        app.listen(PORT, () => console.log(`app is listening at localhost:${PORT}`))
    })
    .catch((err) => {
        console.error("❌ Mongo Db connection error ", err)
        process.exit(1)
    })