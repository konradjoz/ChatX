import {RoomUser} from '../roomUser';
import React, {useEffect, useState} from "react";


const TodosContext = React.createContext({
    users: [], fetchUsers: () => {
    }
})


export default function Users() {
    const [clientId, setClienId] = useState(localStorage.getItem("clientId"));

    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        const response = await fetch("http://localhost:8000/api/users")
        const users = await response.json()
        setUsers(users.data)
    }
    useEffect(() => {
        console.log(clientId + "YIEKS!");
        fetchUsers()
    }, [])

    return (
        <main>
            <section className="bg-primary pt-5 rounded-bottom text-white">
                <div className="container mb-4 py-5">
                    <h1 className="display-5 fw-bold">Users</h1>
                </div>
            </section>
            <section className="border-bottom pb-5 pt-5">
                <div className="container pb-5 pt-5">
                    <div className="d-flex justify-content-center mb-1 mt-1 pb-auto pe-3 ps-3 pt-auto row">
                        <TodosContext.Provider value={{users, fetchUsers}}>
                            {Object.keys(users).map(
                                item => <RoomUser currentUser={users[item].client_id == clientId}
                                                  clientId={users[item].client_id} isOnline={users[item].isOnline}/>)}
                        </TodosContext.Provider>


                    </div>
                </div>
            </section>
        </main>

    );
}