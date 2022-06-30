import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import CompleteTask from "./Components/CompleteTask.js/CompleteTask";
import ToDos from "./Components/ToDos.js/ToDos";
import Calender from "./Components/Calender/Calender";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/complete-task" element={<CompleteTask />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/to-dos" element={<ToDos />} />
            </Routes>
        </div>
    );
}

export default App;
