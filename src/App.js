import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import CompleteTask from "./Components/CompleteTask.js/CompleteTask";
import ToDos from "./Components/ToDos/ToDos";
import Calendar from "./Components/Calendar/Calendar";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/complete-task" element={<CompleteTask />} />
                <Route path="/Calendar" element={<Calendar />} />
                <Route path="/to-dos" element={<ToDos />} />
            </Routes>
        </div>
    );
}

export default App;
