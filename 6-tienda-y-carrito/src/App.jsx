import { useContext, useState } from "react";
import Products from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { FiltersContext } from "./context/filters";

//customHook
function useFilters() {
  //   const [filters, setFilters] = useState({
  //     category: "all",
  //     minPrice: 0,
  //   });
  //este ☝️ estado lo vamos a modificar con el setFilters cuando hagamos un filtrado personalizado
  //!ya no necesitamos lo de arriba xq ahora esta usando Context

   //** Context */
   const { filters, setFilters} = useContext(FiltersContext);
   //recibimos estos del context

  //**FILTRAR**// por category & price
  //ESTO ES DE JUNIORS REPASAR
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        //va a mostrar los que cumplan con:
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filters, filterProducts, setFilters };
}

function App() {
  const [products] = useState(initialProducts);

  //sacar las functions de nuestro customHook useFilters
  const { filters, filterProducts, setFilters } = useFilters();

  //estos filtrados son los que se pasan al component
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters}></Footer>}
      {/* este footer se renderiza solo en modo dev */}
    </>
  );
}

export default App;
