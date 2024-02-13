import React, {useState}from "react";
import {v4 as uuidv4} from 'uuid';

function NewTaskForm({setTasksList,tasksList,categories}) {
  const [formData,setFormData] = useState(
    {
      id:uuidv4(),
      text:'',
      category:'All'
    }
  )

  function handleChange (e){
    const name = e.target.name;
    const value = e.target.value;

    setFormData(
      {
        ...formData,
        [name] : value,
      }
    )
  }

 function  handleSubmit(e){
  e.preventDefault();
  setTasksList([...tasksList,formData])
  
  }

  const optionElements = categories.map((category) => <option key = {uuidv4()}>{category}</option>)
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={formData.category}>
          {/* render <option> elements for each category here */}
          {optionElements};
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
