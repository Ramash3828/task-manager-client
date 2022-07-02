import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route, useParams } from "react-router-dom";
import Header from "./Components/Header/Header";
import CompleteTask from "./Components/CompleteTask.js/CompleteTask";
import ToDos from "./Components/ToDos/ToDos";
import UpdateToDo from "./Components/ToDos/UpdateToDo";
import Calendar from "./Components/Calendar/Calendar";

function App() {
    // const { id } = useParams();
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/update-to-dos/:id" element={<UpdateToDo />} />
                <Route path="/complete-task" element={<CompleteTask />} />
                <Route path="/Calendar" element={<Calendar />} />
                <Route path="/to-dos" element={<ToDos />} />
            </Routes>
        </div>
    );
}

export default App;
