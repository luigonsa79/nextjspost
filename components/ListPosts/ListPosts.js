import { map } from "lodash";
import Link from "next/link";
import Image from 'next/image';

export default function ListPosts(props) {
  const { posts } = props;

  const productos = posts.results;

  // console.log(posts);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {map(productos, (post) => (
        <Post productos={post} key={post.url_producto} />
      ))}
    </div>
  );
}

// function Post(props) {
//   const { post } = props;
//   return (
//     <div className="col-sm-3">
//       <div className="card">
//         <div className="card-body">
//           <Link href={`/posts/${post.slug}`}>
//             <div className="overflow">
//               <img
//                 src={post.miniature}
//                 alt={post.title}
//                 className="card-img-top"
//               />
//             </div>
//           </Link>
//           <h5 className="card-title">{post.title}</h5>
//           <div className="card-text">
//             <span className="fst-italic fs-6">Categorias:</span>
//             <span className="badge  text-dark">
//               <Link
//                 className="fw-light lh-lg"
//                 href={`/categories/${post.category.slug}`}
//               >
//                 <a className="lh-lg">{post.category.title}</a>
//               </Link>
//             </span>
//           </div>
//           <div className="d-grid gap-2">
//             <Link className="fw-light lh-lg" href={`/posts/${post.slug}`}>
//               <a className="lh-lg btn btn-primary">Ver Articulo</a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Post(props) {
  const { productos } = props;
  // console.log(productos);

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className="col">
      <div className="card mb-3">
        <p className="card-header text-center text-white bg-danger">
          {productos.nombre_producto}
        </p>
        <div className="card-body">
          <h5 className="card-title text-muted fst-italic fs-6">Categoria</h5>
          <h6 className="card-subtitle">
            <Link href={`/categories/${productos.url_categoria}`}>
              <a className="badge bg-green text-dark">{productos.nombre_categoria}</a>
            </Link></h6>
        </div>
        {/* imagen */}
        <Link href={`/posts/${productos.url_producto}`}>
          <div className="overflow">
            <Image
              loader={myLoader}
              src={productos.image_producto}
              alt={productos.nombre_producto}
              width={450}
              height={600}
              className="card-img-top"
            />

          </div>
        </Link>
        <div className="card-footer text-muted text-center">
          <Link className="fw-light lh-lg" href={`/posts/${productos.url_producto}`}>
            <a className="lh-lg btn btn-outline-danger">Ver Articulo</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
