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
        <section className='contactme'  id='Contact'>
            <h1>Let's Work Together</h1>
            <p> contact me : </p>
            <form onSubmit={handleSubmit}>
                <input type='mail' required placeholder={'Email'} onChange={handleChange} />
                <textarea placeholder='Contact whit me'/>
                <button type='submit'> Send </button>
            </form>
        </section>
    )
}