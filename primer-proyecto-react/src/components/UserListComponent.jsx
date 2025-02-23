import { useEffect, useState} from "react"


export const UserListComponent = ({endpoint}) => {

 const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        const data = await response.json()
        setUsers(data)
        }catch(error){
            console.error('Error al obtener los usuarios:', error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [endpoint])

  return (
    <>
        <h1>Lista de Usuarios</h1>
        <ul>
            {endpoint === 'users' 
                ? users.map(user => <li key={user.id}>{user.name}</li>) 
                : users.map(user => <li key={user.id}>{user.body}</li>)
            }
        </ul>
    </>
  )
}
