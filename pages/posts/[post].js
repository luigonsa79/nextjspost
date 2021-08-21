import Basic from "../../layouts/Basic";
import { useRouter } from "next/router"; 
import { useState, useEffect } from "react"
import { getPostbySlugApi } from '../api/posts';
import { size } from 'lodash';
import Spinner from "../../components/Header/Spinner";
import DetallePost from "../../components/DetallePost"

export default function Post() {

    const {query} = useRouter();
    // console.log(query);

    const [detalle, setDetalle] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getPostbySlugApi(query.post);
            // console.log(response);
            setDetalle(response.results);
        })()
    }, [query])

    return (
        <Basic>

            {!detalle && <Spinner />}

            {detalle && size(detalle) === 0 && (<div><h3>Proximamente :)</h3></div>)}

            {size(detalle) > 0 &&(
                <DetallePost detalle={detalle} />
            )}

        </Basic>
    )
}
