import type { CompleteTodo, ListOfTodos, TodoId } from "../types";
import Todo from "./Todo";

//Type Definition
type Props = {
	todos: ListOfTodos;
	onRemoveTodo: (id: TodoId) => void;
	onToggleCompleteTodo: ({ id, completed }: CompleteTodo) => void;
};

//Component
const Todos: React.FC<Props> = ({
	todos,
	onRemoveTodo,
	onToggleCompleteTodo,
}) => {
	return (
		<ul className="todo-list">
			{todos.map((todo) => (
				<li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
					<Todo
						key={todo.id}
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
						onRemoveTodo={onRemoveTodo}
						onToggleCompleteTodo={onToggleCompleteTodo}
					/>
				</li>
			))}
		</ul>
	);
};

export default Todos;
