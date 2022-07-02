import { format } from "date-fns";
import React, { useState } from "react";

const useDatePicker = () => {
    const [selected, setSelected] = useState(new Date());
    const formatedDate = format(selected, "PP");
    const footer = (
        <p className="text-info">Daily Task {format(selected, "PP")}.</p>
    );

    return { formatedDate, footer, selected, setSelected };
};

export default useDatePicker;
