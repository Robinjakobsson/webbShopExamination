import {Link} from 'react-router'


const HeaderComponent = () => {

    return(
        <header className="mainHeader">
            <Link to="/">WelcomePage</Link>
            <Link to="/library">Library</Link>
            <Link to="/cart">Cart</Link>
        </header>
    )
}

export default HeaderComponent;