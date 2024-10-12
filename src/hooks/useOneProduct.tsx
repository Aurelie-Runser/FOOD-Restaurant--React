import recipesOne from "./donnees/recipes-one.json"

import { useEffect, useState } from "react"
import { Product } from "../interfaces/Product"

export function useOneProduct(id:number):{
    loading: boolean;
    data: Product | null;
    errors: Error | null;
} {

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<Product | null>(null)
    const [errors, setErrors] = useState<Error | null>(null);
    
    /*
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
    */

    useEffect(() => {
        try {
            const foundProduct = (recipesOne as Product[]).find(r => r.recipe_id === id);
    
            if (foundProduct) {
                foundProduct.note = parseFloat(foundProduct.note.toFixed(1));
                foundProduct.prix = parseFloat(foundProduct.prix.toFixed(2));
            }
    
            setData(foundProduct ? foundProduct : null);
        } catch (e) {
            setErrors(e instanceof Error ? e : new Error("La recette n'a pas été trouvé."));
        } finally {
            setLoading(false);
        }
    }, [id]);
    

    return{ loading, data, errors }
}