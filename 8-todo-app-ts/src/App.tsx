import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { type FilterValue, TODO_FILTERS } from "./consts";
import type { CompleteTodo, TodoId, TodoTitle } from "./types";

const mockTodos = [
	{ id: "0", title: "Learn React", completed: false },
	{ id: "1", title: "Learn Remix", completed: false },
	{ id: "2", title: "Learn Redux-Toolkit", completed: false },
];

const App = () => {
	const [todos, setTodos] = useState(mockTodos);
	const [filterSelected, setFilterSelected] = useState<FilterValue>(
		TODO_FILTERS.ALL,
	);

	const handleRemove = (id: TodoId) => {
		//filtrar todos los todos diferentes al que se quiere eliminar para renderizar solo esos jajaja
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	const handleCompleted = ({ id, completed }: CompleteTodo) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed };
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const handleFilterChange = (filter: FilterValue): void => {
		setFilterSelected(filter);
	};

	const activeCount = todos.filter((todo) => !todo.completed).length;

	const completedCount = todos.length - activeCount;

	const filteredTodos = todos.filter((todo) => {
		if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
		if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
		return todo;
	});

	const handleRemoveAllCompleted = () => {
		const newTodos = todos.filter((todo) => !todo.completed);
		setTodos(newTodos);
	};

	const handleAddTodo = ({ title }: TodoTitle) => {
		const newTodo = {
			title,
			id: crypto.randomUUID(),
			completed: false,
		};

		const newTodos = [...todos, newTodo];
		setTodos(newTodos);
	};

	return (
		<div className="todoapp">
			<Header onAddTodo={handleAddTodo} />
			<Todos
				todos={filteredTodos}
				onRemoveTodo={handleRemove}
				onToggleCompleteTodo={handleCompleted}
			/>
			<Footer
				activeCount={activeCount}
				completedCount={completedCount}
				filterSelected={filterSelected}
				onClearCompleted={handleRemoveAllCompleted}
				handleFilterChange={handleFilterChange}
			/>
		</div>
	);
};

export default App;
