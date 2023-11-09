import Products from "./components/Products";
import Header from "./components/Header";
import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";

function App() {
  const [products] = useState(initialProducts);

  //* filtrando por categorías y precios
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  }); //valores per default

  //los initialProducts va a pasar por este filtro que muestra solo los que tengan un price mayor a 0 y con una categoría valida
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      ); //si todo esto se valida, se pinta
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
