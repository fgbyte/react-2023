import type { CompleteTodo, TodoId, Todo as TodoType } from "../types";
//usamos `as TodoType` para diferenciarlo del nombre del Componente

type Props = TodoType & {
	onRemoveTodo: (id: TodoId) => void;
	onToggleCompleteTodo: ({ id, completed }: CompleteTodo) => void;
};

const Todo: React.FC<Props> = ({
	id,
	title,
	completed,
	onRemoveTodo,
	onToggleCompleteTodo,
}) => {
	const handleChangeCheckbox = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		onToggleCompleteTodo({
			id,
			completed: event.target.checked,
		});
	};

	return (
		<div className="todo">
			<input
				type="checkbox"
				className="toggle"
				checked={completed}
				onChange={handleChangeCheckbox}
			/>
			<label>{title}</label>
			<button
				type="button"
				className="destroy"
				onClick={() => {
					onRemoveTodo(id);
				}}
			/>
		</div>
	);
};

export default Todo;
