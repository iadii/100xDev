import express from 'express'
import mongoose from 'mongoose';
const router = express.Router()


router.get("/", async (req, res) => {
  const dbConnected = mongoose.connection.readyState === 1;

  const health = {
    status: dbConnected ? "ok" : "error",
    server: "up",
    database: dbConnected ? "connected" : "disconnected",
    uptime: process.uptime(),
    timestamp: new Date(),
  };

  return res.status(dbConnected ? 200 : 503).json(health);
});

export default router;