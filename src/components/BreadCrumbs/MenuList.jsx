import MenuItem from "./MenuItem"

export default function  MenuList({list = []}) {
    return <ul className="menulist-container">
        {
            list && list.length ?
            list.map(ListItem => <MenuItem item={ListItem}/>)
            : null
        }
    </ul>
}