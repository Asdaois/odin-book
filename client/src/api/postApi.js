import axiosApi from "./axiosApi";

const create = async (post) => {
  const response = await axiosApi.post("posts/create", post);
  // TODO: Handle response
  return response;
};

const getLasts = async () => {
  const response = await axiosApi.get('posts')
  // TODO: Handle response
  return response.data;
}

export const postApi = { create, getLasts };
