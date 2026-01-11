import { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
    id: number
    title: string
    instructor: string
    rating: number
    reviews: number
    price: number
    icon: string
}

interface CartContextType {
    cartItems: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
    isInCart: (id: number) => boolean
    cartCount: number
    subtotal: number
    tax: number
    total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const addToCart = (item: CartItem) => {
        if (!cartItems.find(i => i.id === item.id)) {
            setCartItems([...cartItems, item])
        }
    }

    const removeFromCart = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCartItems([])
    }

    const isInCart = (id: number) => {
        return cartItems.some(item => item.id === id)
    }

    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
    const tax = subtotal * 0.08
    const total = subtotal + tax

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            isInCart,
            cartCount: cartItems.length,
            subtotal,
            tax,
            total
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
