import { useState, useEffect } from "react"

function useFetch(url) {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        fetch(url)
            .then(response=>response.json())
            .then(data=>console.log(data))

        if (!url) return
        setLoading(true)
        async function fetchData() {
            try {
            
                const response = await fetch(url)
                if (!response.ok){
                    const {errorMessage}= await response.json()
                    throw new Error(errorMessage)
                }else{
                    const data = await response.json()
                   
                    setData(data)
                    console.log(data)
                } }
            catch (err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }      
        fetchData()   
    }, [url])
    
    return { isLoading, data, error }
    
    }

    export {useFetch}