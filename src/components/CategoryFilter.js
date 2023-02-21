import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {

  function handleClick(e) {
    setSelectedCategory(e.target.value)
  }
  
  const categoryList = categories.map((category) => {
    return <button 
    key={category} 
    className={category === selectedCategory ? "selected" : null} 
    value={category} 
    onClick={handleClick}>
      {category}
    </button>
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
