import { useState } from 'react'
import Scrollspy from 'react-scrollspy'
import './NavBar.css'
export default function NavBar () {
    const [color, setColor] = useState(false)

    const handleColor = () => {
        if(window.scrollY>=100){
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', handleColor)

    return (
        <header className={color ? "nav-conteiner-below" : "navbar-conteiner"}>
            <nav>
                <Scrollspy className={color ? 'navbar-buttons-below' : 'navbar-buttons'} items={ ['Home', 'About', 'Projects', 'Contact'] } currentClassName={color ? "is-current-below" : "is-current"}>
                    <li><a href='#Home'>HOME</a></li>
                    <li><a href='#About'>ABOUT</a></li>
                    <li><a href='#Projects'>PROJECTS</a></li>
                    <li><a href='#Contact'>CONTACT</a></li>
                </Scrollspy>
            </nav>
            <label class="toggle">
                <input type="checkbox" class="toggle__input sr-only"/>
                <span class="toggle__item"></span>
            </label>
        </header>
    )
}