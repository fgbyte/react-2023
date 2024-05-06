import type { FilterValue } from "../consts";
import Filters from "./Filters";

//types
type Props = {
	activeCount: number;
	completedCount: number;
	filterSelected: FilterValue;
	onClearCompleted: () => void;
	handleFilterChange: (filter: FilterValue) => void;
};

//component
const Footer: React.FC<Props> = ({
	activeCount = 0,
	completedCount = 0,
	filterSelected,
	onClearCompleted,
	handleFilterChange,
}) => {
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{activeCount}</strong> tareas pendientes
			</span>

			<Filters
				filterSelected={filterSelected}
				onFilterChange={handleFilterChange}
			/>

			{/* Clear Completed Button */}
			{completedCount > 0 && (
				<button
					type="button"
					className="clear-completed"
					onClick={onClearCompleted}
				>
					Clear Completed {completedCount}
				</button>
			)}
		</footer>
	);
};

export default Footer;
