import { createContext, ReactNode, useState, useEffect } from "react";

// Créer le contexte du panier
export const CartContext = createContext({
    cart: [] as number[],
    actionCart: () => {}
});

// Composant provider pour le contexte du panier
export function CartContextProvider({ children }: { children: ReactNode }) {
    // Initialisation du panier
    const [cart, setCart] = useState<number[]>(() => {
        const storedCart = localStorage.getItem("monPanier");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Fonction pour gérer les actions sur le panier (ajout, suppression, réinitialisation)
    const actionCart = (num: number, action: string) => {
        if (action === "add" && !cart.includes(num)) {
            setCart((prevCart) => [...prevCart, num]);
        } else if (action === "supp" && cart.includes(num)) {
            setCart((prevCart) => prevCart.filter((p) => p !== num));
        } else if (action === "reset") {
            setCart([]);
        }
    };

    // Enregistrement en local du panier
    useEffect(() => {
        localStorage.setItem("monPanier", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, actionCart }}>
            {children}
        </CartContext.Provider>
    );
}
