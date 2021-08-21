import Link from "next/link";
import { map } from "lodash";

export default function DetallePost(props) {
  const det = props;
  const detalle = det.detalle;
    // console.log(detalle);

  return (
    <div>
      {map(detalle, (DetallePost) => (
        <PostDetalle detalle={DetallePost} key={DetallePost.id_producto} />
      ))}
    </div>
  );
}

function PostDetalle(props) {
  const { detalle } = props;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={detalle.image_producto}
            alt={detalle.nombre_producto}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{detalle.nombre_producto}</h5>
            <p className="card-text">{detalle.descripcion_producto}</p>
            {/* <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
