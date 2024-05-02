import React from "react";

export default function Disease() {
    return (
        // <div className="start-btn">
        //     Fever,Cough,Headache,Pain,<br></br>Heart Disease etc..
        // </div>
        <div className="abc">
            <button className="start-btn ">Fever</button>
            <button className="start-btn slow-btn">Cough</button>
            <button className="start-btn slow-btn">Headache</button>
            <button className="start-btn ">Pain</button>
            <button className="start-btn slow-btn">Heart Disease</button>
            <button className="start-btn slow-btn">etc....</button>
        </div>
    )
}