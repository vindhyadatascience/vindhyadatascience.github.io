import { useState } from "react";


export default () => {

    const [theme, setTheme] = useState()

    const setDarkMode = () => {
        document.querySelector('html').setAttribute('data-theme', 'dark')
        document.querySelector('#hero-section').classList.remove('hero-light')
    }
    const setLightMode = () => {
        document.querySelector('html').setAttribute('data-theme', 'light')
        document.querySelector('#hero-section').classList.add('hero-light')
    }

    const toggleTheme = () => {
        // const theme = document.querySelector('html').getAttribute('data-theme');
        if (theme === 'light') {
            setDarkMode()
            setTheme('dark')
        } else {
            setLightMode()
            setTheme('light')
        }
    }

    return (
        <a href='#' onClick={() => toggleTheme()}>
            <span className="material-symbols-outlined theme-switcher"
                style={theme === 'light' ? { color: "black"} : { color: "white"}}>
                {theme === 'light' ? "dark_mode" : "light_mode"}
            </span>
            
        </a>
    )
}