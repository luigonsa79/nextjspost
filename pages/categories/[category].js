import Basic from "../../layouts/Basic";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { getAllPostsbyCategoryApi } from '../api/posts';
import { size } from 'lodash';
import ListPostCat from '../../components/ListPostCat';
import Spinner from "../../components/Header/Spinner"


export default function Category() {

    const { query } = useRouter();
    // console.log(query);

    const [postCat, setPostCat] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getAllPostsbyCategoryApi(query.category);
            // console.log(response);
            setPostCat(response);

        })()
    }, [query]) //ejecuta cada vez que elijimos otra categoria y hace la peticion

    return (
        <Basic>

            {!postCat && <Spinner />}

            {postCat && size(postCat) === 0 && (<div><h3>Proximamente :)</h3></div>)}

            {size(postCat) > 0 && (
                <ListPostCat postCat={postCat} />
            )}

        </Basic>
    )
}