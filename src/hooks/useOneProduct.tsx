import { useEffect, useState } from "react"

export function useOneProduct(id){

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)
    
    useEffect(() => {
        fetch('http://localhost:4000/recipes/'+id, {
              headers: {
                'Accept': 'application/json; charset=UTF-8',
              }
            }).then((res) => res.json()).then(data => {
                // data = data(d) => ({
                //     ...d, // pour garder toutes les propriétés et non uniquement 'note' et 'prix'
                //     note: d.note.toFixed(1),
                //     prix: d.prix.toFixed(2)
                // })
                setData(data)
            }).catch((e) => {
                setErrors(e)
            }).finally(() => {
                setLoading(false)
            });
    }, [id])

    return{ loading, data, errors }
}