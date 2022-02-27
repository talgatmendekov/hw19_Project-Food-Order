// 3rd Version import {ReactComponent as CartIcon} from '../../assets/CartIcon.svg'
import { useContext } from 'react';
import { ModalContext } from '../../store/modal-context';
import { CartContext } from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = (props) => {

	const {onShow} = useContext(ModalContext)
	const {items} = useContext(CartContext)
	return (
		<button className={classes.button} onClick={onShow}>
			<span className={classes.icon}>
				{/* 1st version {
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
					</svg>
				}  2nd version*/}
				{/* <img src={CartIcon} alt='icon' /> */}
                {/* 3rd version <CartIcon/> */}
                <CartIcon/>
            </span>
			<span className={classes.bump}>Your Cart</span>
			<span className={classes.badge}>{items.length}</span>
		</button>
	)
}

export default HeaderCartButton;