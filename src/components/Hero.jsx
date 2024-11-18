// Styles
import "./Hero.scss"

// Symbols & images
import symbol from '/img/VDS-Symbol-Color-CMYK.svg'

// Components
import RoundedButton from './RoundedButton'
import ThemeSwitcher from './ThemeSwitcher'
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'


export default () => {    
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Scroll to hash on page load
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.getElementById(location.hash.substring(1));

                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 500);
        }
    }, [location]);
    
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
                        Vindhya Data Science is a women-owned small business
                        with headquarters in North Carolina, USA. Vindhya 
                        specializes in evidence-based medicine, epidemiology, 
                        bioinformatics, genomics, artificial intelligence and data engineering. The Company has ongoing partnerships with the federal government, leading academic medical centers and pharma/biotech. Vindhya works towards transforming large data sets into informed decisions using state of the art data science technologies.
                    </h3>
                </hgroup>
                <p>
                    <RoundedButton text="Why Vindhya?" href="/#services" />
                    <RoundedButton text="Meet the team" href="/#team" />
                    <RoundedButton text="Contact us" href="mailto:info@vindhyadatascience.com" />
                </p>
            </header>
        </div>
    )
}