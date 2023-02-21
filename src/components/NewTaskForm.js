import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("")

  const optionElements = categories.map((category) => {
    if (category !== "All") {
      return <option>{category}</option>
    }
  })
  
  
  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({text, category})
    setText("")
    setCategory("Code")

  }

  function handleTextChange(e) {
    setText(e.target.value)
  }

  function handleCatChange(e) {
    setCategory(e.target.value)
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={category}
          onChange={handleCatChange}
        >
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
