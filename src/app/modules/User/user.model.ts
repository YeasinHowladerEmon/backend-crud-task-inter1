import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

export const UserSchema = new Schema<IUser, UserModel>(
  {
    id: {
      type: Number,
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    domain: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    available: {
      type: Boolean,
      required: true
    },
    gender: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);
export const User = model<IUser, UserModel>("User", UserSchema);
