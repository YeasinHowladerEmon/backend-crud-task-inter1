import httpStatus from "http-status";
import catchAsync from "../../../helpers/catchAsync";
import sendResponse from "../../../helpers/sendResponse";
import { Request, Response } from "express";
import { ITeam } from "./team.interface";
import { TeamService } from "./team.service";

const createTeam = catchAsync(async (req: Request, res: Response) => {
    const { ...data } = req.body;
    console.log(req.body);
    const result = await TeamService.createTeam(data);
    sendResponse<ITeam>(res, {
      statusCode: httpStatus.OK,
      success: true,
      messages: "Team Create Successfully",
      data: result
    });
  });
const getTeam = catchAsync(async (req: Request, res: Response) => {
    const result = await TeamService.getTeam();
    sendResponse<ITeam[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      messages: "Team get Successfully",
      data: result
    });
  });
const getTeamById = catchAsync(async (req: Request, res: Response) => {
    const result = await TeamService.getTeamById(req.params.id);
    console.log(result)
    sendResponse<ITeam>(res, {
      statusCode: httpStatus.OK,
      success: true,
      messages: "Team Id Get Successfully",
      data: result
    });
  });

  export const TeamController = {
    createTeam,
    getTeam,
    getTeamById,
    
  };