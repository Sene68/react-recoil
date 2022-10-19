import React from "react";
import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoHead from "./TodoHead";
import TodoItem from "./TodoItem";
import { todoListState } from "../recoil_state";

const TodoList = () => {
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <div className="todo-template-block">
        <TodoHead /> 
        <div className="todo-list-block">
          {todoList.map((todoItem) => (
            <>
              <TodoItem item={todoItem}  />
            </>
          ))}
        </div>
        <TodoItemCreator /> 
      </div>
    </>
  );
};

export default TodoList;
