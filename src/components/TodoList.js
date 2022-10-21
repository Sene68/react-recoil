import React from "react";
import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoHead from "./TodoHead";
import TodoListFilters from "./TodoListFilter";
import TodoItem from "./TodoItem";
import { filteredTodoListState } from "../recoil_state";

const TodoList = () => {
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <div className="todo-template-block">
        <TodoHead /> 
        <TodoListFilters />
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
