import { useEffect, useState } from "react"
import { Product } from "../interfaces/Product"

export function useOneProduct(id:number):{
    loading: boolean;
    data: Product | null;
    errors: Error | null;
} {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)
    
    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/recipes/'+id, {
              headers: {
                'Accept': 'application/json; charset=UTF-8',
              }
            }).then((res) => res.json()).then(data => {
                data.note = data.note.toFixed(1)
                data.prix = data.prix.toFixed(2)
                setData(data)
            }).catch((e) => {
                setErrors(e)
            }).finally(() => {
                setLoading(false)
            });
    }, [id])

    return{ loading, data, errors }
}