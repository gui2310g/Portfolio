import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Sobre'>Sobre mim</Link>
            </nav>
        </header>
    )
}

export default Header;