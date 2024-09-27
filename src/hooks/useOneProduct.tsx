import { useEffect, useState } from "react"

interface Product {
    recipe_id: number,
    imgSrc: string,
    title: string,
    prix: number,
    note: number,
    lien: string,
    cuisine_id: number,
    cuisine_name: string,
    goal_id: number,
    goal_name: string,
    allergies: Array<{allergy: string}>
    dietaryInfo: Array<{dietary_info: string}>
    des: string,
    ingredients: Array<{
        name: string,
        quantity: number,
        unit: string
    }>,
    instructions: Array<{
        instruction_id: number,
        step_number: number,
        StepInstruction: string,
    }>
}

export function useOneProduct(id:number):{
    loading: boolean;
    data: Product | null;
    errors: Error | null;
} {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)
    
    useEffect(() => {
        fetch('http://localhost:4000/recipes/'+id, {
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