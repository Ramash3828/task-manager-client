import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = () => {
    const [selected, setSelected] = useState(new Date());

    const footer = (
        <p className="text-info">Daily Task {format(selected, "PP")}.</p>
    );
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <h2>Calendar</h2>
                    <div className="col-md-6 offset-md-3 w-full d-flex justify-content-center">
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
