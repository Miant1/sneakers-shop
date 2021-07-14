import style from "./Card.module.scss";
import {useState} from "react";

const Card = ({title, imageUrl, price, onAddToCart}) => {

    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () =>{
        onAddToCart({title, price, imageUrl});
        setIsAdded(!isAdded);
    }

    return(
        <div className={style.item}>
            <div className={style.favorite}>
                <img className={style.like} src="/img/unliked-icon.svg" alt="unliked"/>
            </div>
            <img className={style.mainImg} src={imageUrl} alt="sneaker"/>
            <p className={style.info}>{title}</p>
            <div className={style.priceAndAdd}>
                <div className={style.price}>
                    <p>цена:</p>
                    <span>{price} грн.</span>
                </div>
                <img
                    className={style.addBtn}
                    onClick={onClickPlus}
                    src={isAdded ? '/img/added-icon.svg' : '/img/add-icon.svg'}
                    alt="add"/>
            </div>
        </div>
    )
}

export default Card;