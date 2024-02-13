import React from "react";
import Task from "./Task";




function TaskList({setTasksList,tasksList}) {

 

 function  handleClick (id){
  
  const itemsToDisplay = tasksList.filter((task) => task.text !==  id)
  setTasksList([...itemsToDisplay])
  }

  const taskElements = tasksList.map((task, index) => <Task key ={task.id} {...task} onDelete ={handleClick}/>)
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskElements}
    </div>
  );
}

export default TaskList;
