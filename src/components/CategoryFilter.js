import React from "react";
import {v4 as uuidv4} from 'uuid';


function CategoryFilter({categories,setTasksList,tasksWithID}) {
  

  
 function  handleClick (category){
  
  const itemsToDisplay = tasksWithID.filter((task) => {
    
     if(category === 'All'){

      return  true;
     }
    return task.category === category})
  setTasksList([...itemsToDisplay])
  }
  

  const categoriesElements = categories.map((category)=><button onClick ={()=>handleClick(category)} key ={uuidv4()} >{category}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoriesElements}
    </div>
  );
}

export default CategoryFilter;
