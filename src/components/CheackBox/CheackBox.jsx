import React from 'react';

const CheackBox = ({item}) => {
    return (
        <div key={item.id}>
            <input checked={item.completed} onChange={() => onToggle(item.id)} id={item.id}
                   type="checkbox"/>
            <label htmlFor={item.id}>{item.title}</label>
        </div>
    );
};

export default CheackBox;