import type { TodoTitle } from "../types";
import CreateTodo from "./CreateTodo";

type Props = {
	onAddTodo: ({ title }: TodoTitle) => void;
};

const Header: React.FC<Props> = ({ onAddTodo }) => {
	return (
		<header>
			<h1>
				todo{" "}
				<img style={{ width: "60px", height: "auto" }} src="/ts.png" alt="ts" />
			</h1>

			<CreateTodo saveTodo={onAddTodo} />
		</header>
	);
};

export default Header;
