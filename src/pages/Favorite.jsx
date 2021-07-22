import style from "./Home.module.scss";
import Card from "../components/card/Card";
import {useContext} from "react";
import AppContext from "../context";

const Favorite = () => {

    const {favoriteItems, onAddToFavorite, onAddToCart} = useContext(AppContext);

    return(
        <div className={style.contentWrapper}>
            <div className={style.titleWrapper}>
                <h1 className={style.title}>
                    Мои закладки
                </h1>
            </div>
            <div className={style.sneakers}>
                {
                    favoriteItems.map(item => (
                        <Card
                            key={item.id}
                            onClickFavorite={item => onAddToFavorite(item)}
                            onAddToCart={item => onAddToCart(item)}
                            favorited={true}
                            {...item}
                        />

                    ))
                }
            </div>
        </div>
    )
}

export default Favorite;
