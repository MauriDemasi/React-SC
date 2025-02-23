import { useState } from "react"
import { UserListComponent } from "./UserListComponent"


export const UserComponent = () => {

    const [endpoint, setEndpoint] = useState('users')
   

    const handleFetch = () => {
        setEndpoint('comments')
    }

    // useEffect(() => {
    //     fetchUsers()
    // }, [])

  return (
    <>

      <UserListComponent endpoint={endpoint} />
      
      <button onClick={handleFetch}>Obtener Usuarios</button>
    </>
  )
}

