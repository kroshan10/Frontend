import React from "react";

const Option = (props) => {
    const { payload } = props; // Destructure the values prop

    const handleOptionClick = (action,text) => {
        // Call the action passed as a prop
        if (action) {
            action(text);
        }
    };

    return (
        <div>
            {payload.map((item, index) => (
                <button key={index} className="menu" onClick={() => handleOptionClick(item.action,item.text)}>
                    {item.text}
                </button>
            ))}
        </div>
    );
};

export default Option;
