import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path: "./src/.env",
});
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening at ${PORT}`));