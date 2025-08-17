const express = require('express'); 
const zod = require('zod');
const app = express();
const env = require("dotenv");

env.config();
const PORT = process.env.PORT || 4002;

const schema = zod.object({
  email : zod.string().email(),
  password : zod.string().min(5),
});

app.use(express.json());

app.use((req, res, next) => {
  // const { username, password } = req.body;
  // we dont need to pass in schema.safeParse
  // as i already getting from body, and defined in schema
  
  const validate = schema.safeParse(req.body)
  if (!validate.success) {
      res.status(400).json({ 
        msg : "Enter valid Username and password"
      });
      return
  }
  next();
})

app.get('/auth', (req, res) => {
  res.status(200).send(`auth is working fine`)
})

app.use((err, req, res, next) => {
  res.send(`internal server error`)
})

app.listen(PORT, () => {
  console.log(`app is running at http:localhost:${PORT}`)
})