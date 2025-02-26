import { useState, useEffect } from "react"


export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    const getFetch = async () => {
        if(!url) return;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setState({
                data,
                loading: false,
                error: null
            })
        } catch (error) {
            setState({
                data: null,
                loading: false,
                error: error
            })
        }
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data: state.data,
        isLoading: state.loading,
        errors: state.error
    }
}