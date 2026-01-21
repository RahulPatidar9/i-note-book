import axiosInstance from "./constent";

// GET ALL NOTES
export const getAllNotesAPI = () => {
  return axiosInstance.get("/api/note/all");
};

// DELETE NOTE
export const deleteNoteAPI = (id) => {
  return axiosInstance.delete(`/api/note/delete/${id}`);
};

// UPDATE NOTE
export const updateNoteAPI = (id, data) => {
  return axiosInstance.patch(`/api/note/update/${id}`, data);
};

// (Optional) ADD NOTE
export const addNoteAPI = (data) => {
  return axiosInstance.post("/api/note/add", data);
};
