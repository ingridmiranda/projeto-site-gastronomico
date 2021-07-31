import './styles.css'
import {Link} from 'react-router-dom'

const Header = () =>{
    return (
        <main class="main-container">
            <h1> El Complejo Gastronómico</h1>
    

            <ul>
                <li><Link to='/'><a>Home</a></Link></li>
                <li><Link to='/culinaria'>Culinária</Link></li>
                <li><Link to='/programacao'>Programação</Link></li>
                <li><Link to='/contato'>Contato e Reserva</Link></li>
            </ul>
        </main>
    )
}

export default Header;