import { map } from "lodash";
import Link from "next/link";
import { Image } from 'next/image';

export default function ListPostCat(props) {
  const { postCat } = props;

  const categorias = postCat.results;
  // console.log(categorias);


  return (
    <div className="row">
      {map(categorias, (post) => (
        <PostCat categorias={post} key={post.url_producto}/>
      ))}
    </div>
  );
}

function PostCat(props) {
  const { categorias } = props;
  return (
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <Link href={`/posts/${categorias.url_categoria}`}>

            <div className="overflow">
              <Image
                src={categorias.image_categoria}
                alt={categorias.nombre_categoria}
                className="card-img-top"
              />
            </div>

          </Link>
          <h5 className="card-title">{categorias.nombre_producto}</h5>
          <div className="card-text">
            <span className="fst-italic fs-6">Categorias:</span>
            <span className="badge  text-dark">
              <Link className="fw-light lh-lg" href={`/categories/${categorias.url_categoria}`}>
                <a className="lh-lg" >{categorias.nombre_categoria}</a>
              </Link>
            </span>
          </div>
          <div className="d-grid gap-2">
            <Link className="fw-light lh-lg" href={`/posts/${categorias.url_producto}`}>
              <a className="lh-lg btn btn-primary" >Ver Articulo</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

