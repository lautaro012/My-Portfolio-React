import './Cards.css'
import {useState} from 'react'
export default function Cards () {  
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        open ? setOpen(false) : setOpen(true)
    }  
    return (
    <div onClick={handleClick} class={!open ? "element-card" : "element-card open"}>
            <div class="front-facing">
                <h1 class="abr">Cu</h1>
                <p class="title">Cooper</p> 
                <span class="atomic-number">29</span>
                <span class="atomic-mass">63.54</span>
            </div>
        <div class="back-facing">
            <p>Copper is a chemical element with symbol Cu (from Latin: cuprum) and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity.</p>
            <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">More info</a></p>
        </div>
    </div>
    )
}