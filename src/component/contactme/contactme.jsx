import { useState } from "react"
import './contactme.css'


export default function Contactme () {
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = () => {
        console.log('enviado a ', email)
    }
    return (
        <div className='contactme'>
            <h1>Let's Work Together</h1>
            <p> contact me : </p>
            <form onsubmit={handleSubmit}>
                <input type='mail' required placeholder={'Email'} onChange={handleChange} />
                <button type='submit'></button>
            </form>
        </div>
    )
}