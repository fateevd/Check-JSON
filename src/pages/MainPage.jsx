import {useState} from "react";
import {json} from "../api/json";

export const MainPage = () => {
    const [input, setInput] = useState('');
    const [copy, setCopy] = useState([]);
    const [state, setState] = useState(json);
    const onToggle = (id) => {
        setState(
            state.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
                item.checked.map(subItem => {
                    if (subItem.id === id) {
                        subItem.completed = !subItem.completed;
                    }
                    return subItem;
                })
                return item;
            })
        )
    }

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
        <div className="App">
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                <button onClick={(event) => setText(event)}>setState</button>
                <button onClick={(event) => copyState(event)}>copyState</button>
            </form>
            {state.map(item =>
                <div key={item.id}>
                    <input type="radio" checked={item.completed} onChange={() => onToggle(item.id)}/>{item.title}
                    {item.checked.map(item =>
                        <div key={item.id}>
                            <input checked={item.completed} onChange={() => onToggle(item.id)} id={item.id}
                                   type="checkbox"/>
                            <label htmlFor={item.id}>{item.title}</label>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}


