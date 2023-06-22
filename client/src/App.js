import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom"
import Nav from "./components/Nav/Nav";
import HomeScreen from "./screens/homeScreen/homeScreen";
import AddTaskScreen from "./screens/addTaskScreen/addTaskScreen";
import CompletedTaskScreen from "./screens/completedTaskScreen/completedTaskScreen"

function App() {
  // const [content, setContent] = useState([]);

  // useEffect(() => {
  //   fetch("/api/tasks")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       if (data) {
  //         setContent(data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);

  return (
    <div className="App">
      <Nav />
      {/* {content.map((data) => (
        <ul key={data._id}>
          <li>{data.title}, {data.description}</li>
        </ul>
      ))}
      Hello */}
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/addTask" element={<AddTaskScreen />} />
          <Route path="/completedTasks" element={<CompletedTaskScreen />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
