import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import { IS_DEVELOPMENT } from "./config";
import { CartProvider } from "./context/cart";
import { useFilters } from "./hooks/useFilters";
import { products as initialProducts } from "./mocks/products.json";

function App() {
	//sacar las functions de nuestro customHook useFilters
	const { filterProducts } = useFilters();

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
