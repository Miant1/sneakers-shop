import style from "./Content.module.scss";
import Card from "./card/Card";

const Content = ({items, onAddToCart}) => {

    return(
        <div className={style.contentWrapper}>
            <div className={style.titleWrapper}>
                <h1 className={style.title}>Все кроссовки</h1>
                <div className={style.search}>
                    <input type="text" placeholder='Поиск...'/>
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className={style.sneakers}>
                {
                    items.map(item => (
                        <Card
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            // onClickFavorite={}
                            onAddToCart={item => onAddToCart(item)}
                        />

                    ))
                }
            </div>
        </div>
    )
}

export default Content;