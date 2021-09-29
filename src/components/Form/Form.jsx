import React, {useState} from 'react';

const Form = () => {

    const [input, setInput] = useState('');
    const [copy, setCopy] = useState([]);
    const copyState = event => {
        event.preventDefault();
        setCopy(navigator.clipboard.writeText(JSON.stringify(state)));
    }

    const setText = event => {
        event.preventDefault();
        setState(JSON.parse(input));
        setInput('');
    }
    return (
        <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
            <button onClick={(event) => setText(event)}>setState</button>
            <button onClick={(event) => copyState(event)}>copyState</button>
        </form>
    );
};

export default Form;