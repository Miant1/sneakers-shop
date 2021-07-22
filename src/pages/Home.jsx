import style from "./Home.module.scss";
import Card from "../components/card/Card";
import {useState} from "react";

const Home = ({items, onAddToCart, onAddToFavorite, cartItems, isLoading}) => {

    const [searchValue, setSearchValue] = useState('')

    const onSearchChange = (e) => {
        setSearchValue(e.target.value)
    }
    const onCleanSearch = () => {
        setSearchValue('');
    }
    const renderItems = () => {
        const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        return ((isLoading ? [...Array(10)] : filteredItems).map((item, index) => (
                <Card
                    key={index}
                    onClickFavorite={item => onAddToFavorite(item)}
                    onAddToCart={item => onAddToCart(item)}
                    loading={isLoading}
                    {...item}
                />

            ))
        )
    }

    return(
        <div className={style.contentWrapper}>
            <div className={style.titleWrapper}>
                <h1 className={style.title}>
                    {searchValue ? `Поиск по теме: '${searchValue}'` : "Все кроссовки"}
                </h1>
                <div className={style.search}>
                    <input
                        onChange={onSearchChange}
                        type="text"
                        placeholder='Поиск...'
                        value={searchValue}/>
                    <i className="fas fa-search" id={style.searchIcon}></i>
                    {searchValue ? <i className="fas fa-times" onClick={onCleanSearch} id={style.closeIcon} /> : null}
                </div>
            </div>
            <div className={style.sneakers}>
                {renderItems()}
            </div>
        </div>
    )
};

export default Home;
