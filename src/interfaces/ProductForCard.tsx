export interface ProductForCard {
    recipe_id: number,
    title: string,
    imgSrc: string,
    prix: number,
    note: number,
    cuisine_id?: number,
    goal_id?: number,
    dietary_info?: number[],
    allergies?: number[],
}