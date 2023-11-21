import  { Model } from "mongoose";
import { IUser } from "../User/user.interface";

export type ITeam = {
    name:string;
    members: IUser[];
}

export type TeamModel = Model<ITeam, Record<string, unknown>>