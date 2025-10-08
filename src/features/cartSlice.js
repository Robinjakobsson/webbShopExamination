import { createSlice } from "@reduxjs/toolkit"

const loadCartFromLocalStorage = () => {
    try {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Could not fetch cart from local storage: ", error);
        return [];
    }
}

const saveCartToLocalStorage = (cartItems) => {
    try {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
        console.error("Could not save cart to local storage: ", error);
    }
}


const initialState = {
    cartItems : loadCartFromLocalStorage()
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const newMovie = action.payload;
            const id = newMovie.id;
            const price = Number(String(id).slice(0, 3));
            const newItem = {movie: newMovie, quantity: 1, price: price}
            const existingItem = state.cartItems.find(item => item.movie.title === newItem.movie.title);

            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push(newItem);
            }

            saveCartToLocalStorage(state.cartItems);
        },
        deleteItem: (state, action) => {
            const itemToDelete = action.payload;
            const existingItem = state.cartItems.find(item => item.movie.title === itemToDelete.movie.title);

            if(existingItem) {
                state.cartItems = state.cartItems.filter(item => item.movie.title !== existingItem.movie.title);
            }

            saveCartToLocalStorage(state.cartItems);
        },
        increaseQuantity: (state, action) => {
            const itemToEdit = action.payload;
            const existingItem = state.cartItems.find(item => item.movie.title === itemToEdit.movie.title);

            if(existingItem) {
                existingItem.quantity += 1;
            }

            saveCartToLocalStorage(state.cartItems);
        },
        decreaseQuantity: (state, action) => {
            const itemToEdit = action.payload;
            const existingItem = state.cartItems.find(item => item.movie.title === itemToEdit.movie.title);

            if(existingItem) {
                if(existingItem.quantity > 1) {
                    existingItem.quantity -= 1
                }
            }

            saveCartToLocalStorage(state.cartItems);
        }

    }
})

export const {addItem, deleteItem, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;