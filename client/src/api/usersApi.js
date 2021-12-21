import axiosApi from "./axiosApi";

const create = async (user) => {
  const response = await axiosApi.post("users/create", user);
  // TODO: Handle the response?
  console.log(response.data)
};

export const userApi = { create };
