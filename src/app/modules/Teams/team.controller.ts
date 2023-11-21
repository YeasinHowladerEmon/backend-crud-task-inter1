import httpStatus from "http-status";
import catchAsync from "../../../helpers/catchAsync";
import sendResponse from "../../../helpers/sendResponse";
import { Request, Response } from "express";
import { ITeam } from "./team.interface";

const createTeam = catchAsync(async (req: Request, res: Response) => {
    const { ...data } = req.body;
    const result = await TeamService.createTeam(data);
    sendResponse<ITeam>(res, {
      statusCode: httpStatus.OK,
      success: true,
      messages: "Team Create Successfully",
      data: result
    });
  });
const getTeam = catchAsync(async (req: Request, res: Response) => {
    const { ...data } = req.body;
    const result = await TeamService.createTeam(data);
    sendResponse<ITeam[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      messages: "User Create Successfully",
      data: result
    });
  });
const getTeamById = catchAsync(async (req: Request, res: Response) => {
    const { ...data } = req.body;
    const result = await TeamService.createTeam(data);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      messages: "User Create Successfully",
      data: result
    });
  });

  export const TeamController = {
    createTeam,
    getTeam,
    getTeamById,
    
  };