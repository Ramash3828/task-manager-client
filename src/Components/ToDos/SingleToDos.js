import React from "react";
import { Link } from "react-router-dom";

const SingleToDos = ({ td }) => {
    return (
        <div className="w-full d-flex g-1 align-items-center my-2 bg-success p-3">
            <input className="mr-2" type="checkbox" name="task" id="task" />
            <div className="d-flex justify-content-between w-full flex-grow-1">
                <div className=" text-start mb-0 ms-2 w-full">
                    <p className="mb-0">
                        <small>{td?.date}</small>
                    </p>
                    <p className="fs-6 mb-0">{td?.task}</p>
                </div>
                <div className="icon">
                    <Link to={`/update-to-dos/${td?._id}`}>
                        <i className="fa-solid fa-pen-to-square pointer"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleToDos;
