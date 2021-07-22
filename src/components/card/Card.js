import style from "./Card.module.scss";
import {useContext, useState} from "react";
import ContentLoader from "react-content-loader"
import AppContext from "../../context";

const Card = ({
    id,
    title,
    imageUrl,
    price,
    onAddToCart,
    onClickFavorite,
    favorited = false,
    loading}) => {

    const [isFavorite, setIsFavorite] = useState(favorited);
    const {isItemAdded} = useContext(AppContext);

    const onClickPlus = () =>{
        onAddToCart({id, title, price, imageUrl});
    }
    const onAddToFav = () => {
        setIsFavorite(!isFavorite);
        onClickFavorite({id, title, price, imageUrl})
    }
    return(
        <div className={style.item}>
            {
                loading ?
                    <ContentLoader
                        speed={2}
                        width={210}
                        height={260}
                        viewBox="0 0 210 260"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="15" rx="10" ry="10" width="150" height="91" />
                        <rect x="0" y="122" rx="3" ry="3" width="150" height="15" />
                        <rect x="0" y="141" rx="3" ry="3" width="93" height="15" />
                        <rect x="0" y="178" rx="8" ry="8" width="80" height="24" />
                        <rect x="118" y="170" rx="8" ry="8" width="32" height="32" />
                    </ContentLoader>
                    :
                    <>
                        <div className={style.favorite}>
                            <img
                                className={style.like}
                                src={isFavorite ? "/img/liked-icon.svg" : "/img/unliked-icon.svg"}
                                alt="unliked"
                                onClick={onAddToFav}/>
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
                                src={isItemAdded(id) ? '/img/added-icon.svg' : '/img/add-icon.svg'}
                                alt="add"/>
                        </div>
                    </>
            }

        </div>
    )
}

export default Card;
