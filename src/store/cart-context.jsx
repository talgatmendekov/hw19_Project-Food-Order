import React, { useReducer } from 'react'
import { ADD, DELETE, ONINCREASE } from '../Helpers/constants'

export const CartContext = React.createContext()

const initialState = {
	items: [],
	totalPrice: 0,
	onAdd: () => {},
	onRemove: () => {},
}

const cartReducer = (state, action) => {
	switch (action.type) {
		case ONINCREASE:
			let currentIndex = state.items.findIndex(
				(el) => el.id === action.item.id,
			)
			if (currentIndex === -1) {
				let newItem = { ...action.item, amount: action.amountValue }
				const newItems = state.items.concat(newItem)
				const newPrice = action.item.price * action.amountValue
				state.totalPrice = state.totalPrice + newPrice
				return {
					...state,
					items: newItems,
				}
			} else {
				const newPrice = action.item.price * action.amountValue
				let finalPrice = state.totalPrice + newPrice
				let newItems = state.items.map((el, index) => {
					return index === currentIndex
						? { ...el, amount: el.amount + action.amountValue }
						: el
				})
				
				return {
					...state,
					items: newItems,
					totalPrice: finalPrice,
				}
			}
		case ADD:
			
			let currentIndexx = state.items.findIndex(
				(el) => el.id === action.item.id,
			)
			const newPrice = state.totalPrice + action.item.price
			let newItems = state.items.map((el, index) => {
				return index === currentIndexx
					? { ...el, amount: el.amount + 1 }
					: el
			})
			console.log(newItems, 'newItem')
			return {
				...state,
				items: newItems,
				totalPrice: newPrice,
			}
		
		case DELETE:
			let currentEl = state.items.find((el) => el.id === action.id)
			if (currentEl.amount === 1) {
				let newItems = state.items.filter((el) => el.id !== action.id)
				return {
					...state,
					items: newItems,
					totalPrice: state.totalPrice - currentEl.price,
				}
			} else {
				let newItem = state.items.map((el) => {
					return el.id === action.id
						? { ...el, amount: --el.amount }
						: el
				})
				return {
					...state,
					items: newItem,
					totalPrice: state.totalPrice - currentEl.price,
				}
			}

		default:
			return state
	}
}

const CartContextProvider = (props) => {
	const [state, dispatch] = useReducer(cartReducer, initialState)

	const onAddHandler = (item) => {
		dispatch({ type: ADD, item })
	}
	const onRemoveHandler = (id) => {
		dispatch({ type: DELETE, id })
	}

	const onIncreaseAmountHandler = (item, amountValue) => {
		dispatch({ type: ONINCREASE, item, amountValue })
	}

	return (
		<CartContext.Provider
			value={{
				items: state.items,
				totalPrice: state.totalPrice,
				onAdd: onAddHandler,
				onRemove: onRemoveHandler,
				onIncrease: onIncreaseAmountHandler,
			}}
		>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
