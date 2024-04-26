// Styles
import "./Hero.scss"

// Symbols & images
import symbol from '/img/VDS-Symbol-Color-CMYK.svg'

// Components
import RoundedButton from './RoundedButton'
import ThemeSwitcher from './ThemeSwitcher'
import { useState } from "react"

export default () => {    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='hero' id='hero-section'>
            <nav className='container-fluid'>
                <ul>
                    <li>
                        <img src={symbol} className="nav-title-text" alt="Vindhya logo" />
                        <span>Vindhya Data Science</span>
                    </li>
                </ul>
                <ul>
                    <li><ThemeSwitcher /></li>
                    <div href="#" className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                        <span className="material-symbols-outlined icon">
                            {/* {isOpen ? "expand_more" : "chevron_right"} */}
                            {isOpen ? "close" : "menu"}
                        </span>
                    </div>
                    {(isOpen && (
                        <ul className="menu-items">
                            <li><a href="#services">Services</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#pubs">Publications</a></li>
                            <li><a href="mailto:info@vindhyadatascience.com">Contact</a></li>
                        </ul>
                    ))}
                </ul>
            </nav>
            <header className="container">
                <hgroup style={{ maxWidth: "650px" }}>
                    <h1 className='gradient-text'>Vindhya Data Science</h1>
                    <h2>Transform your data into decisions</h2>
                    <h3>
                        At Vindhya, we specialize in bioinformatics, genomics, machine learning,
                        artificial intelligence, structural biology, and the full spectrum
                        of computational biology.
                    </h3>
                </hgroup>
                <p>
                    <RoundedButton text="Why Vindhya?" href="#services" />
                    <RoundedButton text="Meet the team" href="#team" />
                    <RoundedButton text="Contact us" href="mailto:info@vindhyadatascience.com" />
                </p>
            </header>
        </div>
    )
}