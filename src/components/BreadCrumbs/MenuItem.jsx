import { useState } from "react";
import MenuList from "./MenuList";


export default function MenuItem ({item}) {
    const [displayCurrentChildren, setCurrentChildren] = useState({})
    
    function handleToggleChildren (getCurrentlabel) {
        setCurrentChildren({...displayCurrentChildren, [getCurrentlabel]: ! displayCurrentChildren[getCurrentlabel]})
    }

    return (
        <li>
            <div style={{display: 'flex', gap: '20px'}}>
                <p>{item.label}</p>
                {
                    item && item.children ?
                    <span
                        onClick={() => handleToggleChildren(item.label)}
                    >
                        {
                            displayCurrentChildren[item.label] ? '-' : '+'
                        }
                    </span>
                    : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                <MenuList list={item.children}/>
                : null
            }
        </li>
    )
}