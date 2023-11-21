import { IUser } from "./../User/user.interface";
import mongoose, { Schema, model } from "mongoose";
import { ITeam, TeamModel } from "./team.interface";
import { UserSchema } from "../User/user.model";

export const TeamSchema = new Schema<ITeam, TeamModel>(
  {
    name: {
      type: String,
      required: true
    },
    members: [UserSchema]
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);
export const Team = model<ITeam, TeamModel>("Team", TeamSchema);
