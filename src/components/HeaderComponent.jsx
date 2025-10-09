import {Link} from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from './DarkModeToggle';  


const HeaderComponent = () => {

    return(
        <header className="mainHeader">
            <section className='middle'>
            <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to="/library">
            <FontAwesomeIcon icon={faBookOpen} />
            </Link>
             <Link to="/filter" className='searchLink'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
            <Link to="/cart" className='cartLink'>
            <FontAwesomeIcon icon={faCartShopping}/>
            </Link>
           
            </section>
            <DarkModeToggle />
        </header>
    )
}

export default HeaderComponent;