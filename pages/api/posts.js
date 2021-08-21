import { BASE_PATH } from "../../utils/constants";

export async function getAllPosts() {
  try {
    // https://api.gonzacr.com/relations?rel=productos,categorias&type=producto,categoria&orderBy=id_producto&orderMode=DESC
    const url = `${BASE_PATH}/relations?rel=productos,categorias&type=producto,categoria&orderBy=id_producto&orderMode=DESC`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAllPostsbyCategoryApi(url_categoria) {
  try {
    // https://api.gonzacr.com/relations?rel=productos,categorias&type=producto,categoria&linkTo=url_categoria&equalTo=servicios
    const url = `${BASE_PATH}/relations?rel=productos,categorias&type=producto,categoria&linkTo=url_categoria&equalTo=${url_categoria}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPostbySlugApi(url_producto){
  try {
    // https://api.gonzacr.com/productos?linkTo=url_producto&equalTo=microfono-xk-1226
    const url = `${BASE_PATH}/productos?linkTo=url_producto&equalTo=${url_producto}`
    const response = await fetch(url);
    // console.log(response.results);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}