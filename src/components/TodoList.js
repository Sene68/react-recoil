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
              <TodoItem id={todoItem.id} text={todoItem.text} isComplete={todoItem.isComplete} />
            </>
          ))}
        </div>
        <TodoItemCreator /> 
      </div>
    </>
  );
};

export default TodoList;
