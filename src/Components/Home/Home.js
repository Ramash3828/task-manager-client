import React from "react";
import Calendar from "../Calendar/Calendar";
import ToDos from "../ToDos/ToDos";

const Home = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <Calendar />
                </div>
                <div className="col-md-4">
                    <ToDos />
                </div>
            </div>
        </div>
    );
};

export default Home;
