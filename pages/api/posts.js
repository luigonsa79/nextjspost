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

export async function getAllPostsbyCategoryApi(category) {
  try {
    // https://gonzacr.com/rest/api/posts/?category__slug=react
    const url = `${BASE_PATH}posts/?category__slug=${category}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPostbySlugApi(slug){
  try {
    // https://gonzacr.com/rest/api/posts/otro-post-react/
    const url = `${BASE_PATH}posts/${slug}/`
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}