import style from './App.module.scss';
import {Route} from 'react-router-dom'
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
    const [items, setItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try{
                // const cartResponse = await axios.get('https://60eecc2feb4c0a0017bf462d.mockapi.io/cart')         //с помощью обычных await ждем выполнения всех запросов
                // const favoriteResponse = await axios.get('https://60eecc2feb4c0a0017bf462d.mockapi.io/favorite')
                // const itemsResponse = await axios.get('https://60eecc2feb4c0a0017bf462d.mockapi.io/items')

                const [cartResponse, favoriteResponse, itemsResponse] = await Promise.all([
                    axios.get('https://60eecc2feb4c0a0017bf462d.mockapi.io/cart'),
                    axios.get('https://60eecc2feb4c0a0017bf462d.mockapi.io/favorite'),
                    axios.get('https://60eecc2feb4c0a0017bf462d.mockapi.io/items')
                ])

                setIsLoading(false);

                setCartItems(cartResponse.data);
                setFavoriteItems(favoriteResponse.data)
                setItems(itemsResponse.data);
            } catch (error){
                alert('Ошибка при запросе данных');
                console.error(error);
            }

        }

        fetchData()

    }, [])

    const onAddToCart = async (item) => {
        const findItem = cartItems.find(obj => Number(obj.parentId) === Number(item.id))
        try{
            if(findItem){
                setCartItems(cartItems.filter(cartItem => Number(cartItem.parentId) !== Number(item.id)));
                await axios.delete(`https://60eecc2feb4c0a0017bf462d.mockapi.io/cart/${findItem.id}`);
            } else{
                setCartItems([...cartItems, item]);
                const {data} = await axios.post('https://60eecc2feb4c0a0017bf462d.mockapi.io/cart', item);
                setCartItems(cartItems => cartItems.map(item => {
                    if(item.parentId === data.parentId){
                        return{
                            ...item,
                            id: data.id,
                        };
                    }
                    return item;
                }));

            }
        } catch (error){
            alert('Не удалось добавить товар в корзину');
            console.error(error);
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
           alert('Возникла ошибка с добавлением в закладки');
           console.error(error);
       }

    }

    const onRemoveFromCart = (id) => {
        try{
            setCartItems(cartItems.filter(item => Number(item.id) !== Number(id)));
            axios.delete(`https://60eecc2feb4c0a0017bf462d.mockapi.io/cart/${id}`);
        } catch (error){
            alert('Не удалось удалить товар с корзины');
            console.error(error);
        }

    }

    const onOpenCart = () => {
        setCartOpened(!cartOpened)
    }
    const onCloseCart = () => {
        setCartOpened(!cartOpened)
    }
    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.parentId) === Number(id));
    }

    return (
        <AppContext.Provider value={{
            items,
            cartItems,
            favoriteItems,
            isItemAdded,
            onAddToCart,
            onAddToFavorite,
            onCloseCart,
            setCartItems}}>
            <div className={style.app}>
                <Drawer
                    onCloseCart={onCloseCart}
                    items={cartItems}
                    onRemove={onRemoveFromCart}
                    opened={cartOpened}/>

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

                <Route path='/orders'>
                    <Orders/>
                </Route>
            </div>
        </AppContext.Provider>
    );
}

export default App;
