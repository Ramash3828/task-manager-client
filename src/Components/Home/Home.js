import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import SingleToDos from "../ToDos/SingleToDos";
import { DayPicker } from "react-day-picker";

const Home = () => {
    const [selected, setSelected] = useState(new Date());
    const [task, setTask] = useState("");
    // const [toDos, setToDos] = useState([]);
    const formatedDate = format(selected, "PP");

    const footer = (
        <p className="text-info">Daily Task {format(selected, "PP")}.</p>
    );

    const { data, refetch, isLoading } = useQuery("task", () =>
        fetch(`http://localhost:5000/task`).then((res) => res.json())
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const onHandelChange = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/task`, {
            method: "POST",
            body: JSON.stringify({
                task: task,
                date: formatedDate,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setTask("");
                refetch();
                alert(data.message);
            });
    };
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        footer={footer}
                    />
                    <div className=" w-75 mx-auto">
                        <div>
                            <form onSubmit={onHandelChange} className=" d-flex">
                                <input
                                    onChange={(e) => setTask(e.target.value)}
                                    className="form-control"
                                    type="text"
                                    name="task"
                                    placeholder="Enter your Task"
                                />
                                <button
                                    className="btn btn-success flex-shrink-0"
                                    type="submit"
                                >
                                    ADD TASK
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h4>Your Task Here</h4>
                    {data?.map((td) => (
                        <SingleToDos
                            key={td._id}
                            td={td}
                            formatedDate={formatedDate}
                            task={task}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
