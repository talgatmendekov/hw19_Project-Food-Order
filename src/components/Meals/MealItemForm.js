import React, { useContext, useState } from 'react'
import { CartContext } from '../../store/cart-context'
import Input from '../UI/input'
import classes from './MealItemForm.module.css'

const MealItemForm = ({data, id}) => {
	const [amountValue, setAmountValue] = useState(1)
    const {onIncrease} = useContext(CartContext)
	
	const onAddHandler = (data) => {
		const newAmount = Number(amountValue)
		return () => onIncrease(data, newAmount)
	}

	const submitHandler = (e) => {
		e.preventDefault()
	}
	
	const onChangeHandler = (event) => {
		setAmountValue(event.target.value)
	}
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<Input 
				label='Amount'
				input={{
					id: 'amount' + id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					value: amountValue,
					onChange : onChangeHandler
					
					
				}}
			/>
			<button onClick={onAddHandler(data)}>+Add</button>
		</form>
	)
}

export default MealItemForm
