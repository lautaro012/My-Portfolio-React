import './Cards.css'
import {useState} from 'react'
export default function Cards () {  
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        open ? setOpen(false) : setOpen(true)
    }  
    return (
    <div onClick={handleClick} className={!open ? "element-card" : "element-card open"}>
            <div className="front-facing">
                <h1 className="abr">Cu</h1>
                <p className="title">Cooper</p> 
                <span className="atomic-number">29</span>
                <span className="atomic-mass">63.54</span>
            </div>
        <div className="back-facing">
            <p>Copper is a chemical element with symbol Cu (from Latin: cuprum) and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity.</p>
        </div>
    </div>
    )
}