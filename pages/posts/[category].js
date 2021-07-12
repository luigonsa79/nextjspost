import Basic from "../../layouts/Basic";
import { useRouter } from "next/router"; 

export default function Category() {

    const {query} = useRouter();
    // console.log(query);

    return (
        <Basic>
            <h2>Estamos en Post por categoria nombre {query.category}</h2>
        </Basic>
    )
}
