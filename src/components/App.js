import React , {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {v4 as uuidv4} from 'uuid';
import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const tasksWithID = TASKS.map((task) => { return {...task, id:uuidv4()}})
  const [tasksList , setTasksList] = useState(tasksWithID);
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} tasksWithID = {tasksWithID} setTasksList = {setTasksList}/>
      <NewTaskForm setTasksList = {setTasksList} tasksList = {tasksList} categories = {CATEGORIES}/>
      <TaskList  tasksList = {tasksList} setTasksList = {setTasksList}/>
    </div>
  );
}

export default App;
