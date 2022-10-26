import { atom, selector } from "recoil";

const todoListState = atom({
    key: "todoListState",
    default: []
});

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All"
});

const addTodoListState = selector({
  key: "addTodoListState",
  get: ({ get }) => get(todoListState),
  set: ({ get, set }, newItems) => {
      const currentItems = get(todoListState);
      const appendedItems = [...currentItems, newItems];
      set(todoListState, appendedItems);
  },
});

const deleteTodoListState = selector({
  key: "deleteTodoListState",
  get: ({ get }) => get(todoListState),
  set: ({ get, set }, item) => {
    const currentItems = get(todoListState);
    const removeItemAtIndex = (arr, index) => {
      return [...arr.slice(0, index), ...arr.slice(index + 1)];
    };
    const index = currentItems.findIndex((listItem) => listItem === item);
    const newList = removeItemAtIndex(currentItems, index);
    set(todoListState, newList);
  },
});

const toggleTodoListState = selector({
  key: "toggleTodoListState",
  get: ({ get }) => get(todoListState),
  set: ({ get, set }, item) => {
    const currentItems = get(todoListState);
    const replaceItemAtIndex = (arr, index, newValue) => {
      return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    };
    const index = currentItems.findIndex((listItem) => listItem === item);
    const newList = replaceItemAtIndex(currentItems, index, {
      ...item,
      isComplete: !item.isComplete
    });
    set(todoListState, newList);
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
    addTodoListState,
    deleteTodoListState,
    toggleTodoListState,
    filteredTodoListState
};