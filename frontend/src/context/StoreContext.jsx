import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems ] = useState({});

    const addToCart = (itemId) =>{
        // cart logic if one product is already added in cart then more is added
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId] > 1) {
                newCart[itemId] -= 1;
            } else {
                delete newCart[itemId]; // Remove item when quantity is zero
            }
            return newCart;
        });
    
    }

    const getTotalCartAmout = () => {
        let totalAmout = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                 let itemInfo = food_list.find((product) => product._id === item);
                 if(itemInfo){
                    totalAmout += itemInfo.price * cartItems[item];
                 }
          
            }
         
        }
        return totalAmout;
    }

    const contextValue = {
         food_list,
         cartItems,
         setCartItems,
         addToCart,
         removeFromCart,
         getTotalCartAmout
         
    }
     
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
            </StoreContext.Provider>
    )
}

export default StoreContextProvider;