import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";


export default function SearchAutoComplete () {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [serachParam ,setSerachParam] = useState('')
    const [showResults, setShowResults] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])
    function searchUser(event) {
        const query = event.target.value.toLowerCase();
        setSerachParam(query);
        if (query.length > 3) {
            const filterData = users && users.length > 0 ?
            users.filter(item => item.toLowerCase().indexOf(query) > -1)
            : [];
            setFilteredUsers(filterData);
            setShowResults(true)
        }
    }

    function handleClick (event) {
        const clickedUser = event.target.innerText
        setShowResults(false)
        setSerachParam(clickedUser)
        setFilteredUsers([])


    }
    async function fetchUserList() {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json();
            if(data && data.users && data.users.length) {
                // console.log(data)
                setUsers(data.users.map((userObject) => userObject.firstName));
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }
    useEffect(() => {
        fetchUserList()
    },[])
    console.log(users, filteredUsers)
    return (
        <div className="search-autocomplete-container">
            <input
                value={serachParam}
                type="text"
                name="search"
                placeholder="Search..."
                id="searchInput"
                onChange={searchUser}
            />
            {
                showResults && <Suggestion data={filteredUsers} handleClick={handleClick}/>
            }
        </div>
    )
}