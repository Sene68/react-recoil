import React from "react";
import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import { todoListState } from "../recoil_state";

const TodoList = () => {
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <>
        <p>{todoItem.id}</p>
        <p>{todoItem.text}</p>
        </>
      ))}
    </>
  );
};

export default TodoList;
