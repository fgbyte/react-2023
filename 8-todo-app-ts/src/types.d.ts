//Type Definitions
export type Todo = {
	id: string;
	title: string;
	completed: boolean;
};

export type ListOfTodos = Todo[];

export type TodoId = Todo["id"];
export type TodoTitle = { title: Todo["title"] };

export type CompleteTodo = Pick<Todo, "id" | "completed">;
