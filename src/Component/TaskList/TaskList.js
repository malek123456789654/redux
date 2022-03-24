import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusTask } from "../../JS/action/task";
import { DELETE_TASK } from "../../JS/ActionTypes/task";

const TaskList = () => {
  const tasks = useSelector((store) => store.taskReducer.taskList);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(DELETE_TASK(id));
  };
  const handleDone = (id) => {
    dispatch(statusTask(id));
  };

  return (
    <div>
      {tasks.map((el) => (
        <div key={el.id}>
          {edit ? (
            <input type="button" value="" />
          ) : (
            <span className={el.done ? "textDone" : null}>{el.text}</span>
          )}
          <button onclick={() => handleDelete(el.id)}>delete</button>
          <button className={() => setEdit(!edit)}>edit</button>
          <button onclick={() => handleDone(el.id)}>
            {el.done ? "undone" : "done"}
          </button>
        </div>
      ))}
    </div>
  );
};
export default TaskList;
