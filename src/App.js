import style from './App.module.scss';
import {Route} from 'react-router-dom'
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import AppContext from "./context";

function App() {
    const [items, setItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get('https://60eecc2feb4c0a0017bf462d.mockapi.io/cart')
            const favoriteResponse = await axios.get('https://60eecc2feb4c0a0017bf462d.mockapi.io/favorite')
            const itemsResponse = await axios.get('https://60eecc2feb4c0a0017bf462d.mockapi.io/items')

            setIsLoading(false);

            setCartItems(cartResponse.data);
            setFavoriteItems(favoriteResponse.data)
            setItems(itemsResponse.data);
        }

        fetchData()

    }, [])

    const onAddToCart = (item) => {
        console.log(item)
        try{
            if(cartItems.find(obj => Number(obj.id) === Number(item.id))){
                setCartItems(cartItems.filter(cartItem => Number(cartItem.id) !== Number(item.id)));
                axios.delete(`https://60eecc2feb4c0a0017bf462d.mockapi.io/cart/${item.id}`);
            } else{
                setCartItems([...cartItems, item]);
                axios.post('https://60eecc2feb4c0a0017bf462d.mockapi.io/cart', item)
            }
        } catch (error){
            alert('Не удалось добавить товар в корзину')
        }

    }

    const onAddToFavorite = async (item) => {
       try{
           if(favoriteItems.find(obj => obj.id === item.id)){
               axios.delete(`https://60eecc2feb4c0a0017bf462d.mockapi.io/favorite/${item.id}`);
               setFavoriteItems(favoriteItems.filter(favoriteItems => Number(favoriteItems.id) !== Number(item.id)));
           } else{
               const {data} = await axios.post('https://60eecc2feb4c0a0017bf462d.mockapi.io/favorite', item)
               setFavoriteItems([...favoriteItems, data]);
           }
       } catch (error) {
           alert('Возникла ошибка с добавлением в закладки')
       }

    }

    const onRemoveFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
        axios.delete(`https://60eecc2feb4c0a0017bf462d.mockapi.io/cart/${id}`);
    }

    const onOpenCart = () => {
        setCartOpened(!cartOpened)
    }
    const onCloseCart = () => {
        setCartOpened(!cartOpened)
    }
    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.id) === Number(id));
    }

    return (
        <AppContext.Provider value={{items, cartItems, favoriteItems, isItemAdded, onAddToCart, onAddToFavorite}}>
            <div className={style.app}>
                {cartOpened && <Drawer onCloseCart={onCloseCart} items={cartItems} onRemove={onRemoveFromCart}/>}

                <Header onOpenCart={onOpenCart}/>

                <Route path='/' exact>
                    <Home
                        onAddToCart={onAddToCart}
                        onAddToFavorite={onAddToFavorite}
                        items={items}
                        cartItems={cartItems}
                        isLoading={isLoading}/>
                </Route>

                <Route path='/favorite'>
                    <Favorite/>
                </Route>
            </div>
        </AppContext.Provider>
    );
}

export default App;
