import style from "./Header.module.scss";
import {Link} from "react-router-dom";
import {useCart} from "../../hooks/useCart";

const Header = ({onOpenCart}) => {

    const {totalPrice} = useCart()

    return(
        <div className={style.headerWrapper}>
            <div className={style.headerLeft}>
                <Link to='/' className={style.logoWrapper}>
                    <img className={style.logo} src='/img/logo.png' alt='logo'/>
                    <div className={style.logoName}>
                        <h2>sneakers shop</h2>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </Link>

            </div>
            <div className={style.headerRight}>
                <div
                    className={style.cart}
                    onClick={onOpenCart}>
                    <i className="fas fa-shopping-cart"></i>
                    <span>{totalPrice} грн</span>
                </div>

                <Link to='/favorite'>
                    <i className="fas fa-heart"></i>
                </Link>

                <Link to='/orders'>
                    <i className="fas fa-user-circle"></i>
                </Link>

            </div>
        </div>
    )
}

export default Header;
