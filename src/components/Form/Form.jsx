import React, {useState} from 'react';
import CustomButton from "../Buttons/CustomButton";

const Form = ({copyState , onInput}) => {

    const [input, setInput] = useState('');


    const setText = event => {
        event.preventDefault();
        onInput(input);
        setInput('');
    }


    return (
        <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
            <CustomButton onClick={(event) => setText(event)}>setState</CustomButton>
            <CustomButton onClick={(event) => copyState(event)}>copyState</CustomButton>
        </form>
    );
};

export default Form;