import { useEffect, useState} from "react"
import { fetchUsers } from "../helpers/fetchData"


export const useFetchData = (endpoint) => {

   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true)
  
   //Con una funcion asincrona
   const getData = async() => {
      const { data, isLoading} = await fetchUsers(endpoint)
      setData(data)
      setIsLoading(false)
   }
  
      useEffect(() => {
        getData()
        
          // ---- Manejando la promesa -----
          //fetchUsers(endpoint)
            //  .then((res) => {
                //     setData(res.data)
                //     setIsLoading(false)
        //  })
      }, [endpoint])
  
      return {
        data,
        isLoading
    }
}
