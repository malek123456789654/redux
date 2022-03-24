import { ADD_TASK, DELETE_TASK, STATUS_TASK } from "../ActionTypes/task";

const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

const deleteTask = (idTask) => {
  return {
    type: DELETE_TASK,
    payload: idTask,
  };
};
export const editTask = (id, textEdited) => {
  return { type: EDIT_TASK, payload: { textEdited, id } };
};

export const statusTask = (id) => {
  return { type: STATUS_TASK, payload: id };
};
