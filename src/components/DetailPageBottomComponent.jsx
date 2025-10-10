import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseQuantity, increaseQuantity } from "../features/cartSlice"; 

const DetailPageBottomComponent = ({ movie }) => {
  const dispatcher = useDispatch();
  const userCart = useSelector((state) => state.cart.cartItems);
  const cartItem = userCart.find((item) => item.movie.id === movie.id); 
  console.log(cartItem)
  const btnClicked = () => {
    if (cartItem) {
      dispatcher(increaseQuantity(cartItem))
    } else {
      dispatcher(addItem(movie));
    }
  }
  
  const btnClicked2 = () => {
    if (cartItem && cartItem.quantity > 0){
      dispatcher(decreaseQuantity(cartItem));
    }
  }

  return (
    <>
   <article className='detailPageBottomTopPart'>
        <button onClick={btnClicked} className='detailPageBtnAddMovieToCart'>Add to cart</button>
        <button onClick={btnClicked2} className='detailPageBtnAddMovieToCart' disabled = {!cartItem || cartItem.quantity <= 0}>Decrease</button>
        <p>Qty: {cartItem.quantity}</p>
    </article>

    <article className='detailPageBottomBottomPart'>
        <p className='detailPageMovieOverview'>{movie.overview}</p>
        <article className='detailPageLanguageInfo'>
            <p><strong>Language</strong></p>
            <p></p>
        </article>
    </article>
    </>
  );
};

export default DetailPageBottomComponent