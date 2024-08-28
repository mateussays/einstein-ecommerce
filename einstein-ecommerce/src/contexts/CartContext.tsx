import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product } from '../types/product'
import { cartReducer } from './cartReducer'

type CartContextType = {
  cartItems: Product[]
  addItemToCart: (item: Product, quantity?: number) => void
  removeItemFromCart: (itemId: string | number) => void
  removeAllItems: (itemId: string | number) => void
  getTotalPrice: () => number
}

type CartProviderProps = {
  children: ReactNode
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, [])

  const addItemToCart = (item: Product, quantity = 1) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      dispatch({ type: 'UPDATE_ITEM', payload: { ...existingItem, quantity: existingItem.quantity + quantity } })
    } else {
      dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity } })
    }
  }

  const removeItemFromCart = (itemId: string | number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId } })
  }

  const removeAllItems = (itemId: string | number) => {
    dispatch({ type: 'REMOVE_ALL_ITEMS', payload: { id: itemId } })
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        removeAllItems,
        getTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
