import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import DarkModeToggle from './DarkModeToggle';
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { hideMovieDetailPage } from '../features/moviesSlice';

const HeaderComponent = () => {
    const dispatch = useDispatch();
    const userCart = useSelector((state) => state.cart.cartItems);
    const [displayQuantity, setDisplayQuantity] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const total = userCart.reduce((sum, item) => sum + item.quantity, 0);
        setDisplayQuantity(total);
    }, [userCart]);

    return (
        <header className="mainHeader">
            <section className='centerSection'>

                <button className="menuToggle" onClick={() => setMenuOpen (!menuOpen)} aria-label="Toggle menu">
                    <FontAwesomeIcon icon ={menuOpen ? faXmark : faBars}/>
                </button>

                <nav className={`menuLinks ${menuOpen ? 'active' : ''}`}>
                    <Link to="/" title='Home' onClick={() => 
                        {dispatch(hideMovieDetailPage()); 
                        setMenuOpen(false); }}>
                        <FontAwesomeIcon icon={faHome} className='icon'/>
                        <p>Home</p>
                    </Link>
                    <Link to="/library" title='Go to our library' onClick={() => 
                        {dispatch(hideMovieDetailPage()); 
                        setMenuOpen(false); }}>
                        <FontAwesomeIcon icon={faBookOpen} className='icon' />
                        <p>Library</p>
                    </Link>
                    <Link to="/filter" className='searchLink' onClick={() => 
                        {dispatch(hideMovieDetailPage()); 
                        setMenuOpen(false); }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'  />
                        <p>Search</p>
                    </Link>
                    <Link to="/new" title='New movies' onClick={() => 
                        {dispatch(hideMovieDetailPage()); 
                        setMenuOpen(false); }}>
                        <FontAwesomeIcon icon={faFilm} className='icon' />
                        <p>New</p>
                    </Link>
                    <Link to="/discover" title='Discover new films' onClick={() => 
                        {dispatch(hideMovieDetailPage()); 
                        setMenuOpen(false); }}>
                        <FontAwesomeIcon icon={faCcDiscover} className='icon' />
                        <p>Discover</p>
                    </Link>
                </nav>
            </section>
                

            <section className='rightSection'>
                <section className='headerCartContainer'>
                <Link to="/cart" title='Your cart' className='cartLink' onClick={() => dispatch(hideMovieDetailPage())}>
                    <FontAwesomeIcon icon={faCartShopping} className='icon' />
                    {/* <FontAwesomeIcon icon={faCartShopping} className='icon' /> */}
                </Link>
                {userCart.length > 0 &&
                    <span className='headerCartItemDisplayBubble'>{displayQuantity}</span>
                }
                </section>
                <DarkModeToggle />
            </section>
            
        </header>
    )
}

export default HeaderComponent;