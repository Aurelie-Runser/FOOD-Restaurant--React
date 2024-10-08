import { createContext, ReactNode, useState, useEffect } from "react";

// Créer le contexte du panier
export const CartContext = createContext({
    cart: [] as number[],
    actionCart: (num: number, price: number, action: string) => {},
    cartPrice: 0,
});

// Composant provider pour le contexte du panier
export function CartContextProvider({ children }: { children: ReactNode }) {
    // Initialisation du panier
    const [cart, setCart] = useState<number[]>(() => {
        const storedCart = localStorage.getItem("monPanier");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Initialisation du prix du panier
    const [cartPrice, setCartPrice] = useState<number>(() => {
        const storedCartPrice = localStorage.getItem("panierPrix");
        return storedCartPrice ? JSON.parse(storedCartPrice) : 0;
    });

    // Fonction pour gérer les actions sur le panier (ajout, suppression, réinitialisation)
    const actionCart = (num: number, price: number, action: string) => {
        const priceNumber = Number(price)

        if (action === "add" && !cart.includes(num)) {
            setCart((prevCart) => [...prevCart, num]);
            setCartPrice((prevPrice) => prevPrice += priceNumber)
        } else if (action === "supp" && cart.includes(num)) {
            setCart((prevCart) => prevCart.filter((p) => p !== num));
            setCartPrice((prevPrice) => Math.max(0, prevPrice - priceNumber))
        } else if (action === "reset") {
            setCart([]);
            setCartPrice(0)
        }
    };

    // Enregistrement en local du panier et son prix
    useEffect(() => {
        localStorage.setItem("monPanier", JSON.stringify(cart));
        localStorage.setItem("panierPrix", JSON.stringify(cartPrice));
    }, [cart, cartPrice]);

    return (
        <CartContext.Provider value={{ cart, actionCart }}>
            {children}
        </CartContext.Provider>
    );
}
