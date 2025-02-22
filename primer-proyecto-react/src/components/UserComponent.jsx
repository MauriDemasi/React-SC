import { useState, useEffect } from "react"


export const UserComponent = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
        }catch(error){
            console.error('Error al obtener los usuarios:', error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

  return (
    <>
      <h1>Lista de Usuario</h1>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

