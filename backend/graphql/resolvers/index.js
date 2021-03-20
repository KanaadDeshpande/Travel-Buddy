import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  addExpenses,
} from './user.js';

import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from './category.js';

import { searchLocation } from './search.js';

export default {
  //user
  authUser: authUser,
  registerUser: registerUser,
  getUserProfile: getUserProfile,
  updateUserProfile: updateUserProfile,
  getUsers: getUsers,
  deleteUser: deleteUser,
  getUserById: getUserById,
  updateUser: updateUser,
  addExpenses: addExpenses,
  //categories
  createCategory: createCategory,
  getCategories: getCategories,
  updateCategory: updateCategory,
  deleteCategory: deleteCategory,
  //search
  searchLocation: searchLocation,
};
