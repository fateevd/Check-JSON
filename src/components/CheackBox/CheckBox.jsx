import React from 'react';

const CheckBox = ({subItem , onChange}) => {
    return (
        <div className="checkBox" >
            <input checked={subItem.completed} onChange={() => onChange(subItem.id)} id={subItem.id}
                   type="checkbox"/>
            <label htmlFor={subItem.id}>{subItem.title}</label>
        </div>
    );
};

export default CheckBox;