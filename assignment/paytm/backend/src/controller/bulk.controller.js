// it is for when user type /ad then shows result of name those starts with ad
import { User } from "../models/users.models.js";

const bulkQuery = async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: `^${filter}`,
          $options: "i",
        },
      }, 
      {
        lastName: {
          // this will find those words from everywhere like user search ad
          //  then it will find every name contains ad in it Aditya, Brad, cadet, Adam
          // "$regex": filter

          $regex: `^${filter}`,

          // $options: "i" means case-insensitive matching.
          // if user type ad then without it only shows user's who put in small case
          // but with it will find aditya, Adam, ADITYA, aDiTyA
          $options: "i",
        },
      },
    ],
  });
  res.status(200).json({
    data: {
      user: users.map((user) => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      })),
    },
  });
};

export { bulkQuery };
