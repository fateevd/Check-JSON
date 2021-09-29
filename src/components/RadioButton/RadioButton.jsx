import React from 'react';

const RadioButton = ({item, onChange}) => {
    return (
        <div className="radioButton">
            <input type="radio" checked={item.completed} onChange={() => onChange(item.id)}/>
            <label htmlFor={item.id}>{item.title}</label>
        </div>
    );
};

export default RadioButton;