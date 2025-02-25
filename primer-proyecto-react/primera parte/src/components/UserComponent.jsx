import { useState } from "react"
import { UserListComponent } from "./UserListComponent"


export const UserComponent = () => {

    const [endpoint, setEndpoint] = useState('users')
   

    const handleFetch = () => {
        setEndpoint('comments')
    }

  return (
    <>

      <UserListComponent endpoint={endpoint} />
      
      <button onClick={handleFetch}>Peticiones</button>
    </>
  )
}

