import { useEffect, useState } from "react"

export function useAllProductsName(){

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    
    useEffect(() => {
        fetch('http://localhost:4000/recipes-title', {
              headers: {
                'Accept': 'application/json; charset=UTF-8',
              }
            }).then((res) => res.json()).then(data => {
                setData(data)
            }).catch((e) => {
                setErrors(e)
            }).finally(() => {
                setLoading(false)
            });
    }, [])

    return{ loading, data, errors }
}