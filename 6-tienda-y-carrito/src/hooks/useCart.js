import { useContext } from "react";
import { CartContext } from "../context/cart";


export const useCart = () => {
    const context = useContext(CartContext)

    //error first
    if (context === undefined) {
        throw new Error('useCart must be used within a CarProvider')
    }

    return context
}