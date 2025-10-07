import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems : []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const newMovie = action.payload;
            const newItem = {movie: newMovie, quantity: 1}
            const existingItem = state.cartItems.find(item => item.movie.title === newItem.movie.title);

            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push(newItem);
            }
        },
        deleteItem: (state, action) => {
            const itemToDelete = action.payload;
            const existingItem = state.cartItems.find(item => item.movie.title === itemToDelete.movie.title);

            if(existingItem) {
                state.cartItems = state.cartItems.filter(item => item.movie.title !== existingItem.movie.title);
            }
        },
        increaseQuantity: (state, action) => {
            const itemToEdit = action.payload;
            const existingItem = state.cartItems.find(item => item.movie.title === itemToEdit.movie.title);

            if(existingItem) {
                existingItem.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const itemToEdit = action.payload;
            const existingItem = state.cartItems.find(item => item.movie.title === itemToEdit.movie.title);

            if(existingItem) {
                if(existingItem.quantity > 1) {
                    existingItem.quantity -= 1
                }
            }
        }

    }
})

export const {addItem, deleteItem, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;