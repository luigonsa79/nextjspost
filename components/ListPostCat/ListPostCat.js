import { map } from "lodash";
import Link from "next/link";

export default function ListPostCat(props) {
  const { postCat } = props;

  // console.log(postCat);

  return (
    <div className="row">
      {map(postCat, (post) => (
        <PostCat postCat={post} key={post.id}/>
      ))}
    </div>
  );
}

function PostCat(props) {
  const { postCat } = props;
  return (
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <Link href={`/posts/${postCat.slug}`}>

            <div className="overflow">
              <img
                src={postCat.miniature}
                alt={postCat.title}
                className="card-img-top"
              />
            </div>

          </Link>
          <h5 className="card-title">{postCat.title}</h5>
          <div className="card-text">
            <span className="fst-italic fs-6">Categorias:</span>
            <span className="badge  text-dark">
              <Link className="fw-light lh-lg" href={`/categories/${postCat.category.slug}`}>
                <a className="lh-lg" >{postCat.category.title}</a>
              </Link>
            </span>
          </div>
          <div className="d-grid gap-2">
            <Link className="fw-light lh-lg" href={`/posts/${postCat.slug}`}>
              <a className="lh-lg btn btn-primary" >Ver Articulo</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

