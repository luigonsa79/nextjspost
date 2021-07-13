import Basic from "../../layouts/Basic";
import { useRouter } from "next/router"; 

export default function Post() {

    const {query} = useRouter();
    console.log(query);

    return (
        <Basic>
            <h2>Estamos en Post de nombre {query.post}</h2>
        </Basic>
    )
}
