import React from "react";

const Option = (props) => {
    const { values } = props; // Destructure the values prop

    const handleOptionClick = (action) => {
        // Call the action passed as a prop
        if (action) {
            action();
        }
    };

    return (
        <div>
            {values.map((item, index) => (
                <button key={index} className="menu" onClick={() => handleOptionClick(item.action)}>
                    {item.text}
                </button>
            ))}
        </div>
    );
};

export default Option;
