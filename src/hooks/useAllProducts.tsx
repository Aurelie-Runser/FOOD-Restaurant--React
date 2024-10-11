import { useEffect, useState } from "react"
import { ProductForCard } from '../interfaces/ProductForCard';

interface AllProducts{
    loading: boolean;
    data: ProductForCard[] | null;
    errors: Error | null;
}

export function useAllProducts():AllProducts{

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    
    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/recipes', {
              headers: {
                'Accept': 'application/json; charset=UTF-8',
              }
            }).then((res) => res.json()).then(data => {
                data = data.map((d:ProductForCard) => ({
                    ...d, // pour garder toutes les propriétés et non uniquement 'prix'
                    note: d.note.toFixed(1),
                    prix: d.prix.toFixed(2)
                }))
                setData(data)
            }).catch((e) => {
                setErrors(e)
            }).finally(() => {
                setLoading(false)
            });
    }, [])

    return{ loading, data, errors }
}