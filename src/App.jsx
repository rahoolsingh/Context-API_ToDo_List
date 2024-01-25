import { useState } from "react";
import TodoInput from "./components/TodoInput";
import { TodosContextProvider } from "./contexts/Todos";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      {
        todo,
        id: Date.now(),
        isCompleted: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, todo: todo} : prevTodo )))
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <TodosContextProvider
      value={{
        todos,
        setTodos,
        addTodo,
        deleteTodo,
        updateTodo,
        toggleComplete,
      }}
    >
      <TodoInput />
      <TodoList />
    </TodosContextProvider>
  );
}

export default App;
