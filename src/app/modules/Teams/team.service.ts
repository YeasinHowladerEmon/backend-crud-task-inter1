
import { ITeam } from "./team.interface";
import { Team } from "./team.model";
import { ObjectId } from "mongodb";
const createTeam = async (payload: Partial<ITeam>):Promise<ITeam | null> => {
    const result = await Team.create(payload);
    return result;
  };
const getTeam = async () => {
    const result = await Team.find({});
    return result;
  };
const getTeamById = async (id:string):Promise<ITeam | null> => {
    
    const result = await Team.findOne({
      _id: new ObjectId(id)
    });
    return result;
  };
  export const TeamService = {
    createTeam,
    getTeamById,
    getTeam
  };