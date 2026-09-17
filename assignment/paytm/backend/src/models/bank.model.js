import mongoose, { Schema } from "mongoose";

const BankDetailSchema = new Schema({});

const BankDetail = mongoose.model("User", BankDetailSchema);
export { BankDetail };
