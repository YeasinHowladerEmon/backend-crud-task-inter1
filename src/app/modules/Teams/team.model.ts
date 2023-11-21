import mongoose, { Schema, model } from "mongoose";
import { ITeam, TeamModel } from "./team.interface";

export const TeamSchema = new Schema<ITeam, TeamModel>(
  {
    name: {
      type: String,
      required: true
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);
export const Book = model<ITeam, TeamModel>("Team", TeamSchema);
