import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) =>{
        // cart logic if one product is already added in cart then more is added
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart =(itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    })

    const contextValue = {
         food_list,
         cartItems,
         setCartItems,
         addToCart,
         removeFromCart
    }
     
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
            </StoreContext.Provider>
    )
}

export default StoreContextProvider;