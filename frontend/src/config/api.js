import axiosInstance from "./constent";

export const getAllNotesAPI = () => {
  return axiosInstance.get("/api/note/all");
};
