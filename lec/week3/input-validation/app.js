const express = require("express");
const app = express();
const PORT = 4001;

app.use(express.json());
app.get("/", (req, res) => {
  const { nums } = req.body;
  const numLength = nums.length;

  res.json({
    msg: `${numLength} is total length of nums`,
  });
});

// user can pass any type of data
// so app might get crashed
// if app gets crashed user can see lot of backend informations
// we need to handle so user see what we want to see them instead of backend info

// global catch
// this is handle error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    msg: "our internel server issue",
  });
  return;
});
app.listen(PORT);
