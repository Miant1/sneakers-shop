import style from "./Drawer.module.scss";

const Drawer = ({onCloseCart, items, onRemove}) => {
    console.log(items)
    return(
        <div className={style.drawerWrapper}>
            {(items.length > 0)
                ?
                <div className={style.drawer}>
                    <div className={style.header}>
                        <h3 className={style.title}>Корзина</h3>
                        <img
                            className={style.close}
                            src="/img/close-icon.svg"
                            alt="close"
                            onClick={onCloseCart}/>
                    </div>
                    <div className={style.inner}>
                        {
                            items.map((item, index) => (
                                <div key={index} className={style.item}>
                                    <div className={style.photo} style={{backgroundImage: `url(${item.imageUrl})`}}></div>
                                    <div className={style.info}>
                                        <p className={style.name}>{item.title}</p>
                                        <span className={style.price}>{item.price} грн.</span>
                                    </div>
                                    <img
                                        className={style.cancel}
                                        onClick={() => onRemove(item.id)}
                                        src="/img/close-icon.svg"
                                        alt="close"/>
                                </div>
                            ))
                        }

                    </div>
                    <div className={style.footer}>
                        <div className={style.sum}>
                            <p>Итого: </p>
                            <div></div>
                            <span>1200 грн.</span>
                        </div>
                        <div className={style.tax}>
                            <p>Налог 5%: </p>
                            <div></div>
                            <span>60 грн.</span>
                        </div>
                        <button className={style.checkout}>
                            Оформить заказ
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                :
                <div className={style.emptyDrawer}>
                    <h3 className={style.title}>Корзина</h3>
                    <div className={style.content}>
                        <img src="/img/empty-cart.png" alt="empty-cart"/>
                        <h3>Корзина пустая</h3>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button className={style.comeBack} onClick={onCloseCart}>
                            <i className="fas fa-arrow-left"></i>
                            Вернуться назад
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Drawer;
