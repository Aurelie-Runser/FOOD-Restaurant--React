export function filtersReducer(state, action){
    switch(action.type){
        case 'CUISINE':
            return {
                ...state,
                cuisine: state.cuisine.map(c => c == action.playload ? {...c, checked: true} : {...c, checked: false})
            }
        case 'GOAL':
            return {
                ...state,
                goal: state.goal.map(g => g == action.playload ? {...g, checked: true} : {...g, checked: false})
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