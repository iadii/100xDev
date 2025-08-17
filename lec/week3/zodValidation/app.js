const express = require('express'); 
const zod = require('zod');
const app = express();
const env = require("dotenv");

env.config();
const PORT = process.env.PORT || 4002;

const schema = zod.object({
  username : zod.string(),
  password : zod.string()
});

app.use(express.json());

app.use((req, res, next) => {
  
})

app.post('/auth', (req, res) => {
  
  
  if (!validate.success) {
      res.status(400).json({ error: 'Invalid input, expected array of numbers.' });
      return
    }
  
})

// app.use((err, req, res, next) => {
//   res.send(`internal server error`)
// })

app.listen(PORT, () => {
  console.log(`app is running at http:localhost:${PORT}`)
})