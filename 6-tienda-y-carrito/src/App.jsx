import { useState } from "react";
import Products from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import Header from "./components/Header";

function App() {
     const [products] = useState(initialProducts)

     //**FILTRAR**// por category & price
     //TODO: ESTO ES DE JUNIORS REPASAR
     const [filters, setFilters] = useState({
         category: 'all',
         minPrice: 0
        })
        //este ☝️ estado lo vamos a modificar con el setFilters cuando hagamos un filtrado personalizado
     const filterProducts = (products) => {
        return products.filter(product => {
            return (
                //va a mostrar los que cumplan con:
                product.price >= filters.minPrice &&
                (
                   filters.category === 'all' ||
                   product.category === filters.category
                )
            )
        })
     }

     const filteredProducts = filterProducts(products)
     //estos filtrados son los que se pasan al component

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
