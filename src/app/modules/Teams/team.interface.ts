import mongoose, { Model } from "mongoose";

export type ITeam = {
    name:string;
    users: mongoose.Schema.Types.ObjectId[];
}


export type TeamModel = Model<ITeam, Record<string, unknown>>