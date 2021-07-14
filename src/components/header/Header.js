import style from "./Header.module.scss";

const Header = ({onOpenCart}) => {
    return(
        <div className={style.headerWrapper}>
            <div className={style.headerLeft}>
                <img className={style.logo} src='/img/logo.png'/>
                <div className={style.logoName}>
                    <h2>sneakers shop</h2>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className={style.headerRight}>
                <div
                    className={style.cart}
                    onClick={onOpenCart}>
                    <i className="fas fa-shopping-cart"></i>
                    <span>1200 грн</span>
                </div>
                <i className="fas fa-heart"></i>
                <i className="fas fa-user-circle"></i>
            </div>
        </div>
    )
}

export default Header;