import { FilterOption, Filters } from "../interfaces/Filters"

interface Action {
    type: 'CUISINE' | 'GOAL' | 'DIETARY' | 'ALLERGIES';
    playload: FilterOption;
}

export function filtersReducer(state:Filters, action:Action){
    switch(action.type){
        case 'CUISINE':
            return {
                ...state,
                cuisine: state.cuisine.map(c =>  ({...c, checked: c === action.playload}))
            }
        case 'GOAL':
            return {
                ...state,
                goal: state.goal.map(g => ({...g, checked: g === action.playload}))
            }
        case 'DIETARY':
            return {
                ...state,
                dietary_info: state.dietary_info.map(di => di == action.playload ? {...di, checked: !di.checked} : di)
            }
        case 'ALLERGIES':
            return {
                ...state,
                allergies: state.allergies.map(al => al == action.playload ? {...al, checked: !al.checked} : al)
            }
    }
}