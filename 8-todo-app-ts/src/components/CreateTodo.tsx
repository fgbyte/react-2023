import { useState } from "react";
import type { TodoTitle } from "../types";

type Props = {
	saveTodo: ({ title }: TodoTitle) => void;
};

const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		saveTodo({ title: inputValue });
		setInputValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="new-todo"
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
				onKeyDown={() => {}}
				placeholder="Que quieres hacer?"
			/>
		</form>
	);
};

export default CreateTodo;
