import { FILTER_BUTTONS, type FilterValue } from "../consts";

type Props = {
	onFilterChange: (filter: FilterValue) => void;
	filterSelected: FilterValue;
};

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
	return (
		<ul className="filters">
			{Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
				const isSelected = key === filterSelected;
				const className = isSelected ? "selected" : "";

				return (
					<li key={key}>
						<a
							href={href}
							className={className}
							onClick={(event) => {
								event.preventDefault();
								onFilterChange(key as FilterValue);
							}}
						>
							{literal}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Filters;
