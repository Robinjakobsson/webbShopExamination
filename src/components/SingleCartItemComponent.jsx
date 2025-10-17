import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteItem, increaseQuantity } from '../features/cartSlice';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showMovieDetailPage } from "../features/moviesSlice";
import comingSoon from '../assets/comingSoon.jpg'


const SingleCartItemComponent = ({item}) => {
    const dispatch = useDispatch();
    const imgUrl = "https://image.tmdb.org/t/p/w92"
    let imgPath = item.movie.poster_path ? `${imgUrl}${item.movie.poster_path}` : comingSoon

    const openMovieDetailPage = () => {
        dispatch(showMovieDetailPage(item.movie))
        window.scrollTo({ top: 0 });
    }

    return(
        <>
            <article className='cartPageSingleCartItem'>
                <article className='cartPageCartItemImgAndQuantity'>
                    <img 
                        className='cartPageMovieImg' 
                        src={imgPath} 
                        onClick={openMovieDetailPage}
                    />
                    
                    <article className='cartPageItemInfo'>
                        <p>{item.movie.title}</p>
                        <article className='cartPageItemQuantity'>
                            <p className="cartPageItemQuantityP">{item.quantity}</p>
                            <p className="cartPageItemPiece">à {item.price} SEK</p>
                            <article className='cartPageBtnQuantityContainer'>
                                <button 
                                    onClick={() => dispatch(decreaseQuantity(item))} 
                                    className={`cartPageBtnSubtractQuantity ${item.quantity > 1 ? "several" : "one"}`}
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <button 
                                    onClick={() => dispatch(increaseQuantity(item))} 
                                    className='cartPageBtnAddQuantity'
                                >
                                    +
                                </button>
                            </article>
                        </article>
                    </article>
                </article>

                <article className='cartPageDeleteBtnAndPriceContainer'>
                    <p> {item.price * item.quantity} kr</p>
                    <button onClick={() => dispatch(deleteItem(item))} className='cartPageBtnDeleteCartItem'>
                        <FontAwesomeIcon icon={faTrash} className="trashIcon" />
                    </button>
                </article>
            </article>
        </>
    )
}

export default SingleCartItemComponent;