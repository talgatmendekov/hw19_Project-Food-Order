import React, { useContext } from 'react'

import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { ModalContext } from '../../store/modal-context'
import CartItem from './CartItem'
import { CartContext } from '../../store/cart-context'

const Cart = () => {
	const { onClose } = useContext(ModalContext)
	const {onAdd, onRemove, items, totalPrice} = useContext(CartContext)
    const total = totalPrice.toFixed(2)

	
	const cartItems = items.map((el) => (
		<CartItem
			key={el.id}
			name={el.name}
			amount={el.amount}
			price={el.price}
			item ={el}
			onAdd ={onAdd.bind(null, el)}
			onRemove = {onRemove.bind(null, el.id)}
			
		/>
	))
	
	return (
		<Modal>
			{cartItems.length > 0 ? cartItems : <p>No orders found</p>}
			<div className={classes.total}>
				<span>Total Price</span>
				<span>{total}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={onClose}>
					close
				</button>
				<button className={classes.button}>order</button>
			</div>
		</Modal>
	)
}

export default Cart
