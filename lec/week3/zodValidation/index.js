const express = require('express'); 
const z = require('zod');
const app = express();
const env = require("dotenv");

env.config();
const PORT = process.env.PORT || 4002;

const schema = z.array(z.number());

app.use(express.json());

function summation(nums){
  let sum = 0
  for (let i of nums){
    sum += i;
  }
  return sum;
}

app.post('/summation', (req, res) => {
  
  // since we need summation 
  // so user must need to put array of numbers
  // otherwise code fatt jayegi
  // so we need to validate it
  // there are multiple ways to validate it
  const { nums } = req.body;
  const validate = schema.safeParse(nums);
  if (!validate.success) {
      res.status(400).json({ error: 'Invalid input, expected array of numbers.' });
      return
    }
  const val = summation(validate.data);
  res.send(`Sum of given array is ${val} ${validate}`);
  // res.send(validate)
})

// app.use((err, req, res, next) => {
//   res.send(`internal server error`)
// })

app.listen(PORT, () => {
  console.log(`app is running at http:localhost:${PORT}`)
})