import { axiosInstance } from "../helpers/axios";

export async function getFiles() {
  try {
    const result = await axiosInstance.get("/files/data");
    return result.data;
  } catch (error) {
    console.error(error);
  }
}
