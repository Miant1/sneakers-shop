import style from "./Drawer.module.scss";
import InfoCart from "../infoCart/InfoCart";
import {useState} from "react";
import axios from "axios";
import {useCart} from "../../hooks/useCart";

const Drawer = ({onCloseCart, items, onRemove, opened}) => {

    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {cartItems, setCartItems, totalPrice} = useCart()

    const onClickOrder = async () => {
        try{
            setIsLoading(true)
            const { data } = await axios.post('https://60eecc2feb4c0a0017bf462d.mockapi.io/orders', {
                items: cartItems
            })
            setOrderId(data.id)
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i]
                await axios.delete(`https://60eecc2feb4c0a0017bf462d.mockapi.io/cart/${item.id}` )
            }

        } catch (error){
            alert('Не удалось создать заказ :(');
        }
        setIsLoading(false)
    }

    return(
        <div className={`${style.drawerWrapper} ${opened ? style.drawerWrapperVis : ''}`}>
            <div className={style.drawer}>
                {(items.length > 0)
                    ?
                    <>
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
                                <span>{totalPrice} грн.</span>
                            </div>
                            <div className={style.tax}>
                                <p>Налог 5%: </p>
                                <div></div>
                                <span>{Math.round(totalPrice * 0.05)} грн.</span>
                            </div>
                            <button disabled={isLoading} onClick={onClickOrder} className={style.checkout}>
                                Оформить заказ
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </>
                    :
                    <InfoCart
                    title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                    description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                    image={isOrderComplete ? "/img/order-done.png" : "/img/empty-cart.png"}
                    setIsOrderComplete={setIsOrderComplete}
                    />
                }
            </div>
        </div>
    )
}

export default Drawer;
