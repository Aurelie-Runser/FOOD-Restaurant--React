export interface Product {
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
    allergies: string[],
    dietaryInfo: string[],
    des: string,
    ingredients: {
        name: string,
        quantity: number,
        unit: string
    }[],
    instructions: {
        instruction_id: number,
        step_number: number,
        StepInstruction: string,
    }[]
}