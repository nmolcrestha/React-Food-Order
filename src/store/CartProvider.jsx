import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReduce = (state, action) => {
    if(action.type='ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartState] = useReducer(cartReduce, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartState({
            type: 'ADD',
            item: item
        });
    };

    const removeItemToCartHandler = id => {
        dispatchCartState({
            type: 'REMOVE',
            id: id
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;