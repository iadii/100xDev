import { User } from "../models/users.models.js";
import { z } from "zod";
import bcrypt from "bcryptjs";

const updateInfoSchema = z.object({
  oldPassword: z.string(),
  newPassword: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});

const updateInfo = async (req, res) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({
      msg: `User not found`,
    });
  }
  const updateData = {};
  const { oldPassword, newPassword, firstName, lastName } = req.body();
  const { success } = updateInfoSchema.safeParse({
    oldPassword,
    newPassword,
    firstName,
    lastName,
  });
  if (!success) {
    return res.status(400).json({
      msg: "Incorrect input",
    });
  }
  if (firstName) updateData.firstName = firstName;
  if (lastName) updateData.lastName = lastName;
  const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({
      msg: `Incorrect current password`,
    });
  }
  updateData.password = await bcrypt.hash(newPassword, 10);
  await user
    .findByIdAndUpdate(userId, { $set: updateData }, { new: true })
    .select("-password");
};

export { updateInfo };
