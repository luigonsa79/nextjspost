import { BASE_PATH } from '../../utils/constants';

export async function getCategoriesApi(){
    try {
        // https://api.gonzacr.com/relations?rel=productos,categorias&type=producto,categoria&linkTo=url_categoria&equalTo=servicios
        const url =`${BASE_PATH}/categorias`;
        const response = await fetch(url);
        const result = await response.json();
        // const result= result1.results;
        // console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getCategoriesProductoApi(){
    try {
        // https://api.gonzacr.com/relations?rel=productos,categorias&type=producto,categoria&linkTo=url_categoria&equalTo=servicios
        const url =`${BASE_PATH}/relations?rel=productos,categorias&type=producto,categoria&linkTo=url_categoria&equalTo=servicios`;
        const response = await fetch(url);
        const result = await response.json();
        // const result= result1.results;
        // console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

