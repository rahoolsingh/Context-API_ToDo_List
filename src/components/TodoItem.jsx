import PropTypes from "prop-types";
import { useState } from "react";
import useTodos from "../contexts/Todos";

function TodoItem({ todo, isCompleted, id }) {
  const [editMode, setEditMode] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo);

  const { toggleComplete, updateTodo, deleteTodo } = useTodos();
  const handleCompleted = () => {
    if (editMode) setEditMode(!editMode);
    toggleComplete(id);
  };

  const handleEdit = () => {
    if (!todoMsg) setTodoMsg(todo);
    setEditMode((prev) => !prev);
    if (todoMsg) updateTodo(id, todoMsg);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div
      className={`flex m-auto w-[650px] max-w-[80%] gap-3 px-5 py-2 my-4 rounded-lg ${
        isCompleted ? "bg-green-600" : "bg-gray-600"
      }`}
    >
      <div className="flex">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCompleted}
        />
      </div>
      <div className="w-full">
        {editMode ? (
          <input
            className="bg-transparent w-full px-2 outline-none"
            type="text"
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
          />
        ) : (
          <p className={`${isCompleted ? "line-through" : ""}`}>{todo}</p>
        )}
      </div>
      <div className="w-fit whitespace-nowrap flex gap-2">
        <button hidden={isCompleted} onClick={handleEdit}>
          ✒️
        </button>
        <button onClick={handleDelete}>❌</button>
      </div>
    </div>
  );
}

export default TodoItem;

TodoItem.propTypes = {
  id: PropTypes.number,
  todo: PropTypes.string,
  isCompleted: PropTypes.bool,
};
