import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import DarkModeToggle from './DarkModeToggle';
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = () => {

    return (
        <header className="mainHeader">
            <section className='centerSection'>
                <Link to="/" title='Home'>
                    <FontAwesomeIcon icon={faHome} className='icon'/>
                    <p>Home</p>
                </Link>
                <Link to="/library" title='Go to our library'>
                    <FontAwesomeIcon icon={faBookOpen} className='icon'/>
                    <p>Library</p>
                    
                </Link>
                <Link to="/filter" className='searchLink'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'  />
                    <p>Search</p>
                </Link>
                  <Link to="/new" title='New movies'>
                    <FontAwesomeIcon icon={faFilm} className='icon' />
                    <p>New</p>
                </Link>
                <Link to="/discover" title='Discover new films'>
                    <FontAwesomeIcon icon={faCcDiscover} className='icon' />
                    <p>Discover</p>
                </Link>
                </section>


                <section className='rightSection'>
                <Link to="/cart" title='Your cart' className='cartLink'>
                    <FontAwesomeIcon icon={faCartShopping} className='icon'/>
                </Link>
            <DarkModeToggle />
            </section>
        </header>
    )
}

export default HeaderComponent;