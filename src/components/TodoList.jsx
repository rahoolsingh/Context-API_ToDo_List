import useTodos from "../contexts/Todos";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodos();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo?.id}>
            <div><TodoItem {...todo}/></div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
