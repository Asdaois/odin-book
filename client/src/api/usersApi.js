import axiosApi from "./axiosApi";

const create = async (user) => {
  const response = await axiosApi.post("users/create", user);
  // TODO: Handle response and error
  return response;
};

const getByUid = async (uid) => {
  const response = await axiosApi.get(`users/firebase/${uid}`)
  // TODO: Handle response and error
  return response.data
}
export const userApi = { create, getByUid };
