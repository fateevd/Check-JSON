import {useState} from "react";
import {json} from "../api/json";
import CustomButton from "../components/Buttons/CustomButton";
import Form from "../components/Form/Form";

export const MainPage = () => {
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
        navigator.clipboard.writeText(JSON.stringify(state));
    }

    const onInput = (input) => {
        setState(JSON.parse(input));
    }

    return (
        <div className="App">
            <Form  onInput={onInput}  copyState={copyState} />
            {state.map(item =>
                <div key={item.id}>
                    <input type="radio" checked={item.completed} onChange={() => onToggle(item.id)}/>{item.title}
                    {item.checked.map(item =>

                    )}
                </div>
            )}
        </div>
    );
}


