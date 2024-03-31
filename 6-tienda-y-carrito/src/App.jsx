import Products from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./context/cart";

function App() {
  //sacar las functions de nuestro customHook useFilters
  const { filters, filterProducts } = useFilters();

  //estos filtrados son los que se pasan al component
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
      {/* este footer se renderiza solo en modo dev */}
    </CartProvider>
  );
}

export default App;
