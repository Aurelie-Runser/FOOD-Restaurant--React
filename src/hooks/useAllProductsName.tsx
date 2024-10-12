import recipesTitle from "./donnees/recipes-title.json"

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

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<ProductName[] | null>(null)
    const [errors, setErrors] = useState<Error | null>(null);

    /*
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
    */

    useEffect(() => {
        try {
            setData(recipesTitle);
        } catch (e) {
            setErrors(e instanceof Error ? e : new Error("Les recettes n'ont pas pu être récupérées."));
        } finally {
            setLoading(false);
        }
    }, []);

    return{ loading, data, errors }
}