import { BASE_PATH } from "../../utils/constants";

export async function getAllPosts() {
  try {
    const url = `${BASE_PATH}posts/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
