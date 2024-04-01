import { useId } from "react";
import { useFilters } from "../hooks/useFilters";
import "./Filters.css";

const Filters = () => {
	//** useId para asociar ids de formularios con elementos */
	const minPriceFilterId = useId();
	const categoryFilterId = useId();

	//** para mostrar los filtros del context */
	const { filters, setFilters } = useFilters(); //estado global
	//se encuentran en el customHook useFilters

	const handleChangeMinPrice = (event) => {
		setFilters((prevState) => ({
			...prevState,
			minPrice: event.target.value,
		}));
	};

	const handleChangeCategory = (event) => {
		setFilters((prevState) => ({
			...prevState,
			category: event.target.value,
		}));
	};

	return (
		<section className="filters">
			<div>
				<label htmlFor={minPriceFilterId}>Price</label>
				<input
					type="range"
					id={minPriceFilterId}
					min="0"
					max="1000"
					step="10"
					onChange={handleChangeMinPrice}
					value={filters.minPrice}
				/>
				<span>${filters.minPrice}</span>
			</div>

			<div>
				<label htmlFor={categoryFilterId}>Categoría</label>
				<select id={categoryFilterId} onChange={handleChangeCategory}>
					<option value="all">Todas</option>
					<option value="laptops">Laptops</option>
					<option value="smartphones">Celulares</option>
				</select>
			</div>
		</section>
	);
};

export default Filters;
