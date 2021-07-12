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
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

// {map(posts, (post) => (

//     <Post post={post} />

// ))}
