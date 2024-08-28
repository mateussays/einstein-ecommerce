import { Product } from '../types/product'

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'UPDATE_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: { id: string | number } }
  | { type: 'REMOVE_ALL_ITEMS'; payload: { id: string | number } }

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
        updatedItems[existingItemIndex].totalPrice =
          updatedItems[existingItemIndex].quantity *
          updatedItems[existingItemIndex].price
        return updatedItems
      } else {
        return [
          ...state,
          {
            ...action.payload,
            quantity: action.payload.quantity,
            totalPrice: action.payload.quantity * action.payload.price
          }
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
          quantity: action.payload.quantity,
          totalPrice:
            action.payload.quantity * updatedItems[existingItemIndex].price
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
          updatedItems[existingItemIndex].totalPrice =
            updatedItems[existingItemIndex].quantity *
            updatedItems[existingItemIndex].price
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
    default:
      throw new Error(`Unknown action`)
  }
}
