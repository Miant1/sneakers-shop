import style from './App.module.scss';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Drawer from "./components/drawer/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const onAddToCart = (item) => {
        setCartItems([...cartItems, item])
    }

    const onOpenCart = () => {
        setCartOpened(!cartOpened)
    }
    const onCloseCart = () => {
        setCartOpened(!cartOpened)
    }

    useEffect(() => {
        axios
            .get('https://mocki.io/v1/6afabad2-c8a0-49db-9da4-a1ee02ccb0c9')
            .then(response => setItems(response.data));
    }, [])

    return (
        <div className={style.app}>
            {cartOpened && <Drawer onCloseCart={onCloseCart} items={cartItems}/>}
            <Header onOpenCart={onOpenCart}/>
            <Content onAddToCart={onAddToCart} items={items}/>
        </div>
    );
}

export default App;
