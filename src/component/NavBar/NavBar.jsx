import { useState } from 'react'
import Scrollspy from 'react-scrollspy'
import './NavBar.css'
export default function NavBar () {
    const [color, setColor] = useState(false)

    const handleColor = () => {
        if(window.scrollY>=500){
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
                    <li><a href='#page-top'>Home</a></li>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#Projects'>Projects</a></li>
                    <li><a href='#Contact'>Contact</a></li>
                </Scrollspy>
            </nav>
        </header>
    )
}