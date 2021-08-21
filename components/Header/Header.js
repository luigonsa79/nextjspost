import { useState, useEffect } from "react";
import { map } from "lodash";
import Link from "next/link";
import { getCategoriesApi } from "../../pages/api/categories";

export default function Header() {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getCategoriesApi();
      // console.log(response);
      setcategories(response.results || []);
    })();
  }, []);

  return <MenuCategories categories={categories} />;
}

function MenuCategories(props) {
  const { categories } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-red">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Link href={`/`}>
                <a className="nav-link">Home</a>
              </Link>
              {map(categories, (category) => (
                <li className="nav-item" key={category.id_categoria}>
                  <Link href={`/categories/${category.url_categoria}`}>
                    <a className="nav-link">{category.nombre_categoria}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
