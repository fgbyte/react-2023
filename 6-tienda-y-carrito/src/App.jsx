import { useState } from "react";
import Products from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";
//customHook

function App() {
  //sacar las functions de nuestro customHook useFilters
  const { filters, filterProducts } = useFilters();

  //estos filtrados son los que se pasan al component
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
      {/* este footer se renderiza solo en modo dev */}
    </>
  );
}

export default App;
