import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteItem, increaseQuantity } from '../features/cartSlice';
import binIcon from '../assets/bin-icon.png';
import { Link } from "react-router";



const SingleCartItemComponent = ({item}) => {
    const dispatcher = useDispatch();
    const imgUrl = "https://image.tmdb.org/t/p/w92"
    console.log("Item: ", item)

    return(
        <>
            <article className='cartPageSingleCartItem'>
                <article className='cartPageCartItemImgAndQuantity'>
                    <Link to="/detail" state={{movie: item.movie}}>
                        <img className='cartPageMovieImg' src={`${imgUrl}${item.movie.poster_path}`}/>
                    </Link>
                    
                    <article className='cartPageItemInfo'>
                        <p>{item.movie.title}</p>
                        <article className='cartPageItemQuantity'>
                            <p className="cartPageItemQuantityP">{item.quantity}</p>
                            <p className="cartPageItemPiece">à {item.price} SEK</p>
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
                    <p> {item.price * item.quantity} kr</p>
                    <button onClick={() => dispatcher(deleteItem(item))} className='cartPageBtnDeleteCartItem'>
                        <img src={binIcon} style={{height: "1.5rem", width: "auto"}}></img>
                    </button>
                </article>
            </article>
        </>
    )
}

export default SingleCartItemComponent;