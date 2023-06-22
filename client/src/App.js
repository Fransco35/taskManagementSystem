import "./App.css";
import { Routes, Route} from "react-router-dom"
import Nav from "./components/Nav/Nav";
import HomeScreen from "./screens/homeScreen/homeScreen";
import AddTaskScreen from "./screens/addTaskScreen/addTaskScreen";
import CompletedTaskScreen from "./screens/completedTaskScreen/completedTaskScreen"

function App() {

  return (
    <div className="App">
      <Nav />
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
