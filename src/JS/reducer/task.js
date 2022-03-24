import { ADD_TASK, DELETE_TASK } from "";
import { EDIT_TASK } from "../ActionTypes/task";
const initialState = {
  taskList: [
    { id: Math.random(), text: "task1", done: false },
    { id: Math.random(), text: "task2", done: false },
    { id: Math.random(), text: "task3", done: false },
    { id: Math.random(), text: "task4", done: false },
  ],
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        taskList: [...state.taskList, action.payload],
      };
    case DELETE_TASK:
      return {
        taskList: state.taskList.filter((task) => task.id != action.payload),
      };
    case EDIT_TASKTASK:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id == action.payload.id
            ? { ...task, text: action.payload.textEdite }
            : task
        ),
      };
    case STATUTS_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id == action.payload ? { ...task, done: !task.done } : task
        ),
      };

    default:
      return state;
  }
};
export default taskReducer;
