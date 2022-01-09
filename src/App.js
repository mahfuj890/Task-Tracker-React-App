import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import React, { useState } from "react";
import Tasks from "./Component/Tasks";
import AddTask from "./Component/AddTask";
import Footer from "./Component/Footer";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import { func } from "prop-types";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shiping",
      day: "Feb 7th at 1:30pm",
      reminder: false,
    },
  ]);
  //Add Task from input
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggle Remainder
  const toggleRemainder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          title="Task Tracker"
          onToggleForm={() => setShowAddTask(!showAddTask)}
          changeText={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}

        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleRemainder}
          />
        ) : (
          "No Task ADD Yet"
        )}

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
