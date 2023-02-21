import React from "react";
import Task from "./Task";

function TaskList({tasks, setTasks, itemsToDisplay}) {
  
  const taskCards = tasks.map((task, index) => {
    return <Task key={index} text={task.text} category={task.category} handleClick={handleDelete}/>
  })

  function handleDelete(name) {
    const updatedTasks = tasks.filter((task) => task.text !== name )
    setTasks(updatedTasks)
  }

  return (
    <div className="tasks">
      {taskCards}
    </div>
  );
}

export default TaskList;
