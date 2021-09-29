import {useState} from "react";
import {initialState} from "../api/json";
import Form from "../components/Form/Form";
import CheckBox from "../components/CheackBox/CheckBox";
import RadioButton from "../components/RadioButton/RadioButton";

export const MainPage = () => {
    const [state, setState] = useState(initialState);

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
        if(input.length){
            try {
                setState(JSON.parse(input));
            }
            catch {
                alert("Не правильный формат вводимых данных");
            }
        }
        else {
            alert("Нельзя установить пустую строку")
        }


    }

    return (
        <div >
            <Form  onInput={onInput} copyState={copyState}/>
            {state.map(item =>
                <div key={item.id}>
                    <RadioButton  item={item} onChange={onToggle}/>
                    {item.checked.map(subItem =>
                        <CheckBox key={subItem.id} subItem={subItem}  onChange={onToggle}/>
                    )}
                </div>
            )}
        </div>
    );
}


