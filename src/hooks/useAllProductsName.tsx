import { useEffect, useState } from "react"

interface ProductName {
    recipe_id: number,
    title: string,
}

export function useAllProductsName():{
    loading: boolean;
    data: ProductName[] | null;
    errors: Error | null;
} {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    
    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/recipes-title', {
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