import { useFetchData } from "../hooks/useFetchData"


export const UserListComponent = ({ endpoint }) => {

    const { data, isLoading } = useFetchData(endpoint)

    return (
        <>
            <h1>Lista de Usuarios</h1>
            <ul>
                {
                    isLoading ? <p>Loading...</p>
                        :
                        endpoint === 'users'
                            ? data.map(item => <li key={item.id}>{item.name}</li>)
                            : data.map(item => <li key={item.id}>{item.body}</li>)

                }
            </ul>
        </>

    )
}
