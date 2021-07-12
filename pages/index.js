import Basic from "../layouts/Basic";
import { useState, useEffect } from "react";
import { getAllPosts } from "../pages/api/posts";
import { size } from "lodash";
import Spinner from "../components/Header/Spinner"

import ListPosts from '../components/ListPosts'

export default function Home() {
  const [posts, setPosts] = useState(null);

  console.log(posts);

  useEffect(() => {
    (async () => {
      const response = await getAllPosts();
      //  console.log(response);
      if (size(response) > 0) {
        setPosts(response);
      } else {
        setPosts([]);
      }
    })();
  }, []);

  return (
    <Basic>

      {!posts && <Spinner />}

      {posts && size(posts) === 0 && (<div><h3>Error en la consulta o no hay registros</h3></div>)}

      {size(posts) > 0 &&(
        <ListPosts posts={posts} />
      )}

    </Basic>
  );
}
