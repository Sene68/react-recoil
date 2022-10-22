import { atom, selector } from "recoil";

const todoListState = atom({
    key: "todoListState",
    default: []
});

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All"
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
  set: ({ set }, newValue) => {
    set(
      todoListState,
      newValue
    )},
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
    filteredTodoListState
};