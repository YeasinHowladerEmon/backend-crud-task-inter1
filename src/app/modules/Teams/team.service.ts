const createTeam = async (payload: IUser) => {
    const userId = await User.find().sort({ id: -1 }).limit(1);
    console.log(userId[0].id);
    payload.id = userId[0].id + 1;
    const result = await User.create(payload);
    return result;
  };
  export const TeamService = {
    createTeam,
    getTeamById,
    
  };