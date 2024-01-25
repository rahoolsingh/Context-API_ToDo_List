import { createContext, useContext } from "react";

export const TodosContext = createContext({
  todos: [],
  setTodos: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggleComplete: () => {},
});

export const TodosContextProvider = TodosContext.Provider;

export default function useTodos() {
  return useContext(TodosContext);
}
