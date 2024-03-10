import { useState } from "react";
import data from "./data";
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    function handleSingleSelection(id) {
        setSelected(id === selected ? null : id);
    }
    function handleMultipleSelection(id) {
        let copyMulti = [...multiple]
        const findIndexofCurrentId = copyMulti.indexOf(id)
        if (findIndexofCurrentId === -1) {
            copyMulti.push(id)
        }
        else {
            copyMulti.splice(findIndexofCurrentId, 1)
        }
        setMultiple(copyMulti)
    }
    return (
    <div className="wrapper">
    <div className="accordian">
        <button className="btn btn-primary" onClick={() => setEnableMultiSelection(!enableMultiSelection)} >Enable Multi Select</button>
        {data && data.length > 0 ?(
            data.map((dataItem) => (
                <div className="item">
                    <div onClick={enableMultiSelection?
                        ()=> handleMultipleSelection(dataItem.id)
                        :() => handleSingleSelection(dataItem.id)}
                        className="title"
                    >
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                        <div>
                            {
                                enableMultiSelection ?
                                multiple.indexOf(dataItem.id) !== -1 &&
                                <div>{dataItem.answer}</div> :
                                selected === dataItem.id &&
                                <div>{dataItem.answer}</div>
                            }
                        </div>
                    </div>
                </div>
            ))
        ): null}
    </div>
    </div>
    )
}
