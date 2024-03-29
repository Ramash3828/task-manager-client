import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import { useForm } from "react-hook-form";
import useDatePicker from "../../hooks/useDatePicker";

const UpdateToDo = () => {
    const { id } = useParams();
    const { formatedDate, selected, setSelected } = useDatePicker();
    const navigate = useNavigate();

    const { data } = useQuery("task", () =>
        fetch(`https://assignment-manage.herokuapp.com/task`).then((res) =>
            res.json()
        )
    );

    const toDosObj = data?.find((toDo) => toDo?._id === id);

    const { register, handleSubmit } = useForm({
        defaultValues: { task: toDosObj?.task },
    });

    const onSubmit = (data) => {
        fetch(`https://assignment-manage.herokuapp.com/edit/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                task: data?.task,
                date: formatedDate,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then((d) => {
                alert(d.message);
                navigate("/");
            });
    };
    return (
        <div className="py-5">
            <h2>To-do Update</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />

                    <form onSubmit={handleSubmit(onSubmit)} className=" d-flex">
                        <input
                            // onChange={(e) => setTaskValue(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Enter your Task"
                            {...register("task", { required: true })}
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
