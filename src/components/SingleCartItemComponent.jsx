import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteItem, increaseQuantity } from '../features/cartSlice';
import binIcon from '../assets/bin-icon.png';



const SingleCartItemComponent = ({item}) => {
    const dispatcher = useDispatch();
    const imgUrl = "https://image.tmdb.org/t/p/w92"

    return(
        <>
            <article className='cartPageSingleCartItem'>
                <article className='cartPageCartItemImgAndQuantity'>
                    <img className='cartPageMovieImg' src={`${imgUrl}${item.movie.poster_path}`}/>
                    <article className='cartPageItemInfo'>
                        <p>{item.movie.title}</p>
                        <article className='cartPageItemQuantity'>
                            <p>{item.quantity}</p>
                            <article className='cartPageBtnQuantityContainer'>
                                <button 
                                    onClick={() => dispatcher(decreaseQuantity(item))} 
                                    className={`cartPageBtnSubtractQuantity ${item.quantity > 1 ? "several" : "one"}`}
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <button onClick={() => dispatcher(increaseQuantity(item))} className='cartPageBtnAddQuantity'>+</button>
                            </article>
                        </article>
                    </article>
                </article>

                <article className='cartPageDeleteBtnAndPriceContainer'>
                    <p>149 kr</p>
                    <button onClick={() => dispatcher(deleteItem(item))} className='cartPageBtnDeleteCartItem'>
                        <img src={binIcon} style={{height: "1.5rem", width: "auto"}}></img>
                    </button>
                </article>
            </article>
        </>
    )
}

export default SingleCartItemComponent;