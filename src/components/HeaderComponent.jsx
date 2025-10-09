import {Link} from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import DarkModeToggle from './DarkModeToggle';  


const HeaderComponent = () => {

    return(
        <header className="mainHeader">
            <section className='middle'>
            <Link to="/" title='Home'>
            <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to="/library" title='Go to our library'>
            <FontAwesomeIcon icon={faBookOpen} />
            </Link>
            <Link to="/discover" title='Discover new films'>
            <FontAwesomeIcon icon={faCcDiscover}/>
            </Link>
            <Link to="/cart" title='Your cart' className='cartLink'>
            <FontAwesomeIcon icon={faCartShopping}/>
            </Link>
            </section>
            <DarkModeToggle />
        </header>
    )
}

export default HeaderComponent;