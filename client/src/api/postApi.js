import axiosApi from "./axiosApi";

const create = (post) => {
  const response = axiosApi.post("posts/create", post);
  // TODO: Handle response
  return response;
};

export const postApi = { create };
