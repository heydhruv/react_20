import MenuList from "./MenuList";


export default function BreadCrumbs ({menu = []}) {
    return (
        <div className="treeview-container">
            <MenuList list={menu}/>
        </div>
    )
}