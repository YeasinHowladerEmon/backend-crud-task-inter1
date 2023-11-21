import httpStatus from "http-status";
import sendResponse from "../../../helpers/sendResponse";
import { IUser } from "./user.interface";
import catchAsync from "../../../helpers/catchAsync";
import { UserService } from "./user.service";
import { Request, Response } from "express";
import pick from "../../../helpers/pick";
import { paginationFields, userFilterableFields } from "./user.constant";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createUser(req.body);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    messages: "User Create Successfully",
    data: result
  });
});

const getUserAll = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, userFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await UserService.getUserAll(filters, paginationOptions);
  console.log(filters)

  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    messages: "User get Successfully",
    meta: result.meta,
    data: result.data
  });
});
const getUserById = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getUserById(req.params.id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    messages: "User get by id Successfully",
    data: result
  });
});
const updateUserById = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.updateUserById(req.params.id, req.body);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    messages: "User Update Successfully",
    data: result
  });
});
const deleteUserById = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.deleteUserById(req.params.id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    messages: "User Delete Successfully",
    data: result
  });
});

export const UserController = {
  createUser,
  getUserAll,
  getUserById,
  updateUserById,
  deleteUserById
};
