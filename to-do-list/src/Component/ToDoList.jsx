import { useState } from "react";
// main thing start from here
function ToDoList() {
  const [tasks, setTask] = useState([]);
  //this elements are to add inputs element
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    // to prevent empty input from entering we use if
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      //we use this to reset the task by this
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    // it will initialize with the array
    setTask(updatedTask);
  }

  function moveUpTask(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  function moveDownTask(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter a task"
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="up-button" onClick={() => moveUpTask(index)}>
                Up
              </button>
              <button
                className="down-button"
                onClick={() => moveDownTask(index)}
              >
                Down
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
