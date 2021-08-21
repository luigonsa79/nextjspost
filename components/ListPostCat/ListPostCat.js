import { map } from "lodash";
import Link from "next/link";
import Image from 'next/image';

export default function ListPostCat(props) {
  const { postCat } = props;

  const categorias = postCat.results;
  // console.log(categorias);


  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {map(categorias, (cat) => (
        <div className="col">
          <PostCat categorias={cat} key={cat.url_categoria} />
        </div>
      ))}
    </div>
  );
}

function PostCat(props) {
  const { categorias } = props;
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    
      <div className="card mb-3">
        <p className="card-header text-center text-white bg-danger">
          {categorias.nombre_producto}
        </p>
        <div className="card-body">
          <h5 className="card-title text-muted fst-italic fs-6">Categoria</h5>
          <h6 className="card-subtitle">
            <Link href={`/categories/${categorias.url_categoria}`}>
              <a className="badge bg-green text-dark">{categorias.nombre_categoria}</a>
            </Link></h6>
        </div>
        {/* imagen */}
        <Link href={`/posts/${categorias.url_producto}`}>
          <div className="overflow">
            <Image
              loader={myLoader}
              src={categorias.image_categoria}
              alt={categorias.nombre_categoria}
              width={450}
              height={600}
              className="card-img-top"
            />

          </div>
        </Link>
        <div className="card-footer text-muted text-center">
          <Link className="fw-light lh-lg" href={`/posts/${categorias.url_producto}`}>
            <a className="lh-lg btn btn-outline-danger">Ver Articulo</a>
          </Link>
        </div>
      </div>
   
  );
}

