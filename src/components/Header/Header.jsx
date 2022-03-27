import "./Header.scss"
import { Link } from "react-router-dom"

export default function Header() {
    return(
        <section className="header">
            <div className="header__left">
                <a href="/"><img src="" alt="TrackYourTrades logo" /></a>
            </div>
            <div className="header__right">
                <Link to={`/watchlist/`}><button>WATCHLIST</button></Link>
                <Link to={`/portfolio/`}><button>PORTFOLIO</button></Link>
                <input className="header__search" type="text" placeholder="Search" />
            </div>
        </section>
    )
}