import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password field is required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

//Mongo db will convert the model name into lowercase and make it plural
//For example model name User will convert into users
