import { useState } from "react";
import useTodos from "../contexts/Todos";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodos();

  const handleTodoSubmit = () => {
    if (!todo) return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <div className="flex gap-4 m-auto my-5 w-[600px] max-w-[80%]">
      <input
        className="bg-zinc-900 px-5 py-2 rounded-lg outline-none w-full"
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a todo"
      />
      <button
        className="px-5 py-2 bg-green-600 rounded-lg font-semibold w-fit whitespace-nowrap"
        onClick={handleTodoSubmit}
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoInput;
