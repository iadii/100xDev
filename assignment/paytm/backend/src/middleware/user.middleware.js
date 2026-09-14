import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
       msg: "Authorization header is required",
    });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      msg: "Access token is required",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(decoded.userId){
        req.userId = decoded.userId;
        next()
    }else{
        return res.status(403).json({
            msg: `Invalid token: user ID is missing`
        })
    }
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid or expired token",
    });
  }
};

export { authMiddleware };
