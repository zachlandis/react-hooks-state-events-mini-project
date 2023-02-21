import React from "react";

function Task({text, category, handleClick}) {

  function handleTaskDelete() {
    handleClick(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleTaskDelete}>X</button>
    </div>
  );
}

export default Task;
