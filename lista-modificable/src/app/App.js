import { useCallback, useState } from 'react';
import '../assets/css/App.css';
import useApp from './state/store/app/app-actions';

const App = () => {
    const { app, addElement, removeElement, goBack } = useApp();
    const [selected, setSelected] = useState([]);
    let clicks = [];
    let timeout;

    const handleChange = useCallback(e => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSelected(value);
    }, [])

    const handleDoubleClick = event => {
        clicks.push(new Date().getTime());
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            if (clicks.length > 1 && clicks[clicks.length - 1] - clicks[clicks.length - 2] < 200) {
                remove(event.target.value);
            }
        }, 200);
    };

    const add = useCallback(() => {
        const element = window.prompt('Add an element: ')
        if (element) {
            const el = {
                label: element,
                id: app.id
            }
            addElement(el);
        }
    }, [addElement, app.id]);

    const remove = useCallback(() => {
        if (selected.length > 0) {
            removeElement(selected)
        }
    }, [removeElement, selected]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>My list:</h1>
                <button className="custom-button" onClick={() => add()}>Add</button>
                <button className="custom-button" onClick={() => remove()}>Remove</button>
                <button className="custom-button" onClick={() => goBack()}>Undo</button>

                <select className="custom-list" onChange={(e) => handleChange(e)} name="list" id="list" multiple>
                    {app.lista.map(el => {
                        return (
                          <option onClick={(e) => handleDoubleClick(e)} key={el.id} value={el.id}>{el.label}</option>
                        )
                    })}
                </select>
            </header>
        </div>
    );
}

export default App;
