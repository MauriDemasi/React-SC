
export const fetchUsers = async (endpoint) => {
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
    const dataResponse = await response.json()
    console.log(dataResponse)
    return {
        data: dataResponse,
        isLoading: false
    }
    }catch(error){
        console.error('Error al obtener los usuarios:', error)
    }

    
}