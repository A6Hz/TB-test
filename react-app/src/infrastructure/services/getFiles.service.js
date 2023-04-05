import { axiosInstance } from "../helpers/axios";

export async function getFiles(queryParams) {
  try {
    let queryFileName = "";
    if (queryParams) {
      queryFileName = `?fileName=${queryParams}`;
    }

    const result = await axiosInstance.get(`/files/data${queryFileName}`);
    return result.data;
  } catch (error) {
    console.error(error);
  }
}
