import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const UpdateToDo = () => {
    const [taskValue, setTaskValue] = useState("");
    const { id } = useParams();

    const { data, refetch } = useQuery("task", () =>
        fetch(`http://localhost:5000/task`).then((res) => res.json())
    );

    const toDosObj = data?.find((toDo) => toDo?._id === id);
    console.log(toDosObj);
    const onUpdateTask = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <h2>To-do Update</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={onUpdateTask} className=" d-flex">
                        <input
                            onChange={(e) => setTaskValue(e.target.value)}
                            className="form-control"
                            type="text"
                            name="task"
                            value={toDosObj?.task}
                            placeholder="Enter your Task"
                        />
                        <button
                            className="btn btn-success flex-shrink-0"
                            type="submit"
                        >
                            UPDATE TASK
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToDo;
