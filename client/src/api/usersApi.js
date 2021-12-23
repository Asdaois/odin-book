import axiosApi from "./axiosApi";

const create = async (user) => {
  const response = await axiosApi.post("users/create", user);
  // TODO: Handle the response?
  console.log(response.data);
};

const search = async (string) => {
  const response = await axiosApi.get(`users/search/${string}`);
  return response.data.result;
};

const getByUid = async (uid) => {
  const response = await axiosApi.get(`users/firebase/${uid}`);
  // TODO: Handle response and error
  return response.data;
};
export const userApi = { create, getByUid, search };
