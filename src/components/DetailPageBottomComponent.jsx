import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice"; 

const DetailPageBottomComponent = ({ movie }) => {
  const dispatcher = useDispatch();

  return (
    <>
   <article className='detailPageBottomTopPart'>
        <button onClick={() => dispatcher(addItem(movie))} className='detailPageBtnAddMovieToCart'>Add to cart</button>
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