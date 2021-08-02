import InfoPages from "../components/infoPages/infoPages";
import style from './Pages.module.scss'
import Card from "../components/card/Card";
import {useEffect, useState} from "react";
import axios from "axios";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try{
            (async () => {   //самовызывающаяся функция
                const {data} = await axios.get('https://60eecc2feb4c0a0017bf462d.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false)
            })()
        } catch (error){
            alert('Ошибка при запросе заказов');
            console.error(error)
        }

    }, []);
    console.log(orders)

    return(
        <div className={style.contentWrapper}>
            <div className={style.titleWrapper}>
                <h1 className={style.title}>
                    Мои заказы
                </h1>
            </div>
            {(orders.length > 0)
            ?
                <div className={style.sneakers}>
                    {
                        (isLoading ? [...Array(10)] : orders).map((item, index) => (
                            <Card
                                key={index}
                                loading={isLoading}
                                {...item}
                            />

                        ))
                    }
                </div>
            :
                <InfoPages
                    imgUrl='/img/noorders-icon.png'
                    title='У вас нет заказов :('
                    info='У вас нет оформленных заказов.'
                />
            }

        </div>

    )
}

export default Orders;
