import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
            <ul className='menu'>
                <li>
                   <Link to="/">Home</Link> 
                </li>
                <li>
                   <Link to="/produtos">Produtos</Link> 
                </li>
                <li>
                   <Link to="/carrinho">Carrinho de Compras</Link> 
                </li>
                <li>
                   <Link to="/contato">Contato</Link> 
                </li>
            </ul>
        </>
    )
}

export default Menu;