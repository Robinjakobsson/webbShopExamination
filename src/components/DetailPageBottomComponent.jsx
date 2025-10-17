import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseQuantity, increaseQuantity } from "../features/cartSlice";

const DetailPageBottomComponent = ({ movie }) => {
  const dispatcher = useDispatch();
  const userCart = useSelector((state) => state.cart.cartItems);
  const cartItem = userCart.find((item) => item.movie.id === movie.id);
  const languages = useSelector((state) => state.movies.movies?.languages || []);
  const languageToDisplay = languages.find((language) => language.iso_639_1 === movie.original_language)
  const [isAdded, setIsAdded] = useState(false);


  const btnClicked = () => {
    if (cartItem) {
      dispatcher(increaseQuantity(cartItem))
    } else {
      dispatcher(addItem(movie));
    }
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000)
  }

  const btnClicked2 = () => {
    if (cartItem && cartItem.quantity > 0) {
      dispatcher(decreaseQuantity(cartItem));
    }
  }

  return (
    <>
      <article className='detailPageBottomTopPart'>
        <button onClick={btnClicked} className='detailPageBtnAddMovieToCart'>Add to cart</button>

        {isAdded &&
          <p className="addText">You added this movie to your cart</p>
        }
      </article>

      <article className='detailPageBottomBottomPart'>
        <p className='detailPageMovieOverview'>
          {movie.overview.endsWith(".") ? movie.overview : movie.overview + "."}
        </p>
        <article className='detailPageLanguageInfo'>
          <p><strong>Languages</strong></p>
          <p>{languageToDisplay
              ? languageToDisplay.english_name
              : "Loading language..."}</p>
        </article>
      </article>
    </>
  );
};

export default DetailPageBottomComponent