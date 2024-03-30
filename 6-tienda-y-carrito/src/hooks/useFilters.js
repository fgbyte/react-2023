import { FiltersContext } from "../context/filters";
import { useContext } from "react";


export function useFilters() {
  //** Context */
  const { filters, setFilters } = useContext(FiltersContext);
  //recibimos estos del context

  //** FILTRAR */ por category & price
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