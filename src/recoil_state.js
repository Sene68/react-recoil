import { atom, selector } from "recoil";

const todoListState = atom({
    key: "todoListState",
    default: []
});

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All"
});

const defaultTodoListState = selector({
  key: "defaultTodoListState",
  get: ({ get }) => get(todoListState),
  set: ({ get, set }, newItems) => {
      const currentItems = get(todoListState);
      const appendedItems = [...currentItems, newItems];
      set(todoListState, appendedItems);
  },
});

const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

const todoListStatsState = selector({
    key: "todoListStatsState",
    get: ({ get }) => {
      const todoList = get(todoListState);
      const totalNum = todoList.length;
      const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
      const totalUncompletedNum = totalNum - totalCompletedNum;
  
      return {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
      };
    }
  });

export { 
    todoListState,
    todoListFilterState,
    todoListStatsState,
    defaultTodoListState,
    filteredTodoListState
};