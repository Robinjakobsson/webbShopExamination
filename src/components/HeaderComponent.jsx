import {Link} from 'react-router'
import DarkModeToggle from './DarkModeToggle';  


const HeaderComponent = () => {

    return(
        <header className="mainHeader">
            <Link to="/">WelcomePage</Link>
            <Link to="/library">Library</Link>
            <Link to="/cart">Cart</Link>
            <DarkModeToggle />
        </header>
    )
}

export default HeaderComponent;