import { lazy, Suspense } from "react";
import Page404 from "./Page404";
import SearchPage from "./SearchPage";
import { Router } from "./Router";
import { Route } from "./Route";

//Lazy
const LazyAboutPage = lazy(() => import("./AboutPage"));
const LazyHomePage = lazy(() => import("./HomePage"));

const appRoutes = [
	{
		path: "/",
		Component: LazyHomePage,
	},
	{
		path: "/about",
		Component: LazyAboutPage,
	},
	{
		path: "/precios",
		Component: () => <h1>Precios Page</h1>,
	},
	{
		//dynamic routes
		path: "/search/:query",
		Component: SearchPage,
	},
];

const App = () => {
	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<Router routes={appRoutes} defaultComponent={Page404}>
					<Route path="/" Component={LazyHomePage} />
					<Route path="/about" Component={LazyAboutPage} />
				</Router>
			</Suspense>
		</main>
	);
};

export default App;
