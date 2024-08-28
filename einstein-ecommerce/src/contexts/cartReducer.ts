import { Product } from '../types/product'

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'UPDATE_ITEM'; payload: Product } 
  | { type: 'REMOVE_ITEM'; payload: { id: string | number } }
  | { type: 'REMOVE_ALL_ITEMS'; payload: { id: string | number } }
  | { type: 'CLEAR_CART' }

export const cartReducer = (
  state: Product[],
  action: CartAction
): Product[] => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.findIndex(
        item => item.id === action.payload.id
      )
      if (existingItemIndex >= 0) {
        const updatedItems = [...state]
        updatedItems[existingItemIndex].quantity += action.payload.quantity
        return updatedItems
      } else {
        return [
          ...state,
          { ...action.payload, quantity: action.payload.quantity }
        ]
      }
    }
    case 'UPDATE_ITEM': {
      const existingItemIndex = state.findIndex(
        item => item.id === action.payload.id
      )
      if (existingItemIndex >= 0) {
        const updatedItems = [...state]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: action.payload.quantity
        }
        return updatedItems
      }
      return state
    }
    case 'REMOVE_ITEM': {
      const existingItemIndex = state.findIndex(
        item => item.id === action.payload.id
      )
      if (existingItemIndex >= 0) {
        const updatedItems = [...state]
        if (updatedItems[existingItemIndex].quantity > 1) {
          updatedItems[existingItemIndex].quantity -= 1
        } else {
          updatedItems.splice(existingItemIndex, 1)
        }
        return updatedItems
      }
      return state
    }
    case 'REMOVE_ALL_ITEMS': {
      return state.filter(item => item.id !== action.payload.id)
    }
    case 'CLEAR_CART': {
      return []
    }
    default:
      throw new Error(`Unknown action`)
  }
}
