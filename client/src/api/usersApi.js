import axiosApi from "./axiosApi";

const create = async (user) => {
  const response = await axiosApi.post("users/create", user);
  // TODO: Handle the response?
};

export const userApi = { create };
