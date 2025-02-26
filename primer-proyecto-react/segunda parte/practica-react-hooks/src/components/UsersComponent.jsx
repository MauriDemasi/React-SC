import { useFetch } from "../hooks/useFetch"

export const UsersComponent = () => {

  const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <>
      <h1>Usuarios</h1>
      {isLoading
        ? <h4>Cargando...</h4>
        : errors
          ? <h4>Hubo un error</h4>
          : <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>

              {data.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
      }
    </>
  )
}