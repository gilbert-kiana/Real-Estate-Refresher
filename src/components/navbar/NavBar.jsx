import "./navbar.scss"

function NavBar(){
    return(
        <nav>
            <div className="left">
                <a href="/">
                <img src="/logo.png" alt=""/>
                <span>GilEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">Right</div>
        </nav>
    )
}

export default NavBar;