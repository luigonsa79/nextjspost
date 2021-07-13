import { map } from "lodash";
import Link from "next/link";

export default function ListPosts(props) {
  const { posts } = props;

  console.log(posts);

  return (
    <div className="row">
      {map(posts, (post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

function Post(props) {
  const { post } = props;
  return (
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <Link href={`/posts/${post.slug}`}>

            <div className="overflow">
              <img
                src={post.miniature}
                alt={post.title}
                className="card-img-top"
              />
            </div>

          </Link>
          <h5 className="card-title">{post.title}</h5>
          <div className="card-text">
            <span className="fst-italic fs-6">Categorias:</span>
            <span className="badge  text-dark">
              <Link className="fw-light lh-lg" href={`/categories/${post.category.slug}`}>
                <a className="lh-lg" >{post.category.title}</a>
              </Link>
            </span>
          </div>
          <div className="d-grid gap-2">
            <Link className="fw-light lh-lg" href={`/posts/${post.slug}`}>
              <a className="lh-lg btn btn-primary" >Ver Articulo</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

