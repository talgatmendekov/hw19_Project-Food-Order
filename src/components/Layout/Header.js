import { Fragment } from "react/cjs/react.production.min";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        
        <Fragment>
            {console.log(mealsImage)}
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onShowModal = {props.onShowModal}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='mealsImage'/>
            </div>
        </Fragment>
        
    )
  
};

export default Header;