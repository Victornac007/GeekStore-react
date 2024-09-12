const NavBar = () => {
    return (    
        
        <header class = "header__container">
            <div clasName ="container_h1">
                <div class = "header__items">
                <a class = "header__logoHome" href = "./index.html">
                    <p class = "header__logoHome-title-01">Geek</p>
                    <p class = "header__logoHome-title-02">Store</p>
                </a>
                
                </div>
                <a class = "header__login" href = "./pages/cart.html">
                    <button class = "header__cart-button">
                        ver carrito
                        <i class="bi bi-cart" ></i>
                        <span id="cart-count">0</span>
                    </button>
                </a>
            </div>

            <nav className = "nav__container">
                <ul className = "nav__list">
                    <li className = "nav__list--li">
                        <button className = "nav__button category-buttom " id="showAll">
                            <i class="bi bi-hand-index-thumb-fill buttom-i"></i>
                            Todos los productos
                        </button>
                    </li>
                    <li className = "nav__list--li">
                        <button className = "nav__button category-buttom" id="videoGames">
                            <i class="bi bi-hand-index-thumb buttom-i"></i>
                            Juegos
                        </button>
                    </li>
                    <li className = "nav__list--li">
                        <button className = "nav__button category-buttom" id="consoles">
                            <i class="bi bi-hand-index-thumb buttom-i"></i>
                            Consolas
                        </button>
                    </li>
                    <li className = "nav__list--li">
                        <button className = "nav__button category-buttom" id="accesories">
                            <i class="bi bi-hand-index-thumb buttom-i"></i>
                            Accesorios
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}

export default NavBar