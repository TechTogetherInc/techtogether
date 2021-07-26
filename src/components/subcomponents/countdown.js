import React from "react";

const Countdown = () => {
    return <div>Countdown</div>
};

export default Countdown;

import React from "react";
import Countdown from "./countdown"

const CountdownParent = () => {
    return (
    <div className="countdownParent">
        CountdownParent
        <Countdown />
    </div>
    );
};

export default CountdownParent;