import { createContext, ReactNode, useState } from "react";

export const CartContext = createContext({
    cart: [],
    actionCart: ()=>{}
})

export function CartContextProvider({children}:{children:ReactNode}){
    const [cart, setCart] = useState([])
    const actionCart = (num:number, action:string)=>{
        if (action == 'add' && !cart.includes(num)) {
            setCart((c)=> [...c, num])
        }
        else if (action === 'supp' && cart.includes(num)) {
            setCart((c) => c.filter((p) => p !== num));
        }
        else if (action == 'reset'){
            setCart([])
        }
    }

    return <CartContext.Provider value={{cart, actionCart}}>
        {children}
    </CartContext.Provider>
}