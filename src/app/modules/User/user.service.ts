import { ObjectId } from "mongodb";
import { userSearchableFields } from "./user.constant";
import { IUser, IUserFilters } from "./user.interface";
import { User } from "./user.model";
import {
  IOptions,
  paginationHelpers
} from "../../../helpers/paginationHelpers";
const createUser = async (payload: Partial<IUser>): Promise<IUser | null> => {
  const userId = await User.find({}).sort({ id: -1 }).limit(1);
  console.log(userId[0].id);
  payload.id = userId[0].id + 1;
  console.log(payload);
  const result = await User.create(payload);
  return result;
};
const getUserAll = async (
  filters: IUserFilters,
  paginationOptions: IOptions
) => {
  const { searchTerm, ...filtersData } = filters;

  const { page, limit, skip } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: userSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i"
        }
      }))
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value
      }))
    });
  }

  const whereConditionsData =
    andConditions.length > 0
      ? {
          $and: andConditions
        }
      : {};

  const result = await User.find(whereConditionsData).skip(skip).limit(limit);
  const total = await User.countDocuments(whereConditionsData);

  return {
    meta: {
      page,
      limit,
      total
    },
    data: result
  };
};
const getUserById = async (id: string) => {
  const result = await User.findOne({
    _id: new ObjectId(id)
  });
  return result;
};
const updateUserById = async (id: string, payload: Partial<IUser>) => {
  const result = await User.findOneAndUpdate(
    { _id: new ObjectId(id) },
    payload,
    { new: true }
  );
  return result;
};
const deleteUserById = async (id: string) => {
  const result = await User.findOneAndDelete({
    _id: new ObjectId(id)
  });
  console.log(result)
  return result;
};

export const UserService = {
  createUser,
  getUserAll,
  getUserById,
  updateUserById,
  deleteUserById
};
