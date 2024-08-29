import { Product } from '../types/product'

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'UPDATE_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: { id: string | number } }
  | { type: 'REMOVE_ALL_ITEMS'; payload: { id: string | number } }

const updateItem = (
  items: Product[],
  id: string | number,
  updateFn: (item: Product) => Product
) => {
  return items.map(item => (item.id === id ? updateFn(item) : item))
}

const addItem = (state: Product[], payload: Product): Product[] => {
  const existingItem = state.find(item => item.id === payload.id)

  if (existingItem) {
    return updateItem(state, payload.id, item => ({
      ...item,
      quantity: item.quantity + payload.quantity,
      totalPrice: (item.quantity + payload.quantity) * item.price
    }))
  }

  return [
    ...state,
    {
      ...payload,
      quantity: payload.quantity,
      totalPrice: payload.quantity * payload.price
    }
  ]
}

const updateItemQuantity = (state: Product[], payload: Product): Product[] => {
  const existingItem = state.find(item => item.id === payload.id)

  if (existingItem) {
    return updateItem(state, payload.id, item => ({
      ...item,
      quantity: payload.quantity,
      totalPrice: payload.quantity * item.price
    }))
  }

  return state
}

const removeItem = (state: Product[], id: string | number): Product[] => {
  return state.reduce((acc, item) => {
    if (item.id === id) {
      if (item.quantity > 1) {
        acc.push({
          ...item,
          quantity: item.quantity - 1,
          totalPrice: (item.quantity - 1) * item.price
        })
      }
    } else {
      acc.push(item)
    }
    return acc
  }, [] as Product[])
}

const removeAllItems = (state: Product[], id: string | number): Product[] => {
  return state.filter(item => item.id !== id)
}

export const cartReducer = (
  state: Product[],
  action: CartAction
): Product[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      return addItem(state, action.payload)

    case 'UPDATE_ITEM':
      return updateItemQuantity(state, action.payload)

    case 'REMOVE_ITEM':
      return removeItem(state, action.payload.id)

    case 'REMOVE_ALL_ITEMS':
      return removeAllItems(state, action.payload.id)

    default:
      throw new Error(`Unknown action`)
  }
}
