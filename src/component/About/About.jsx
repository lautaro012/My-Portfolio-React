import './About.css'
import desktopman from '../../images/DesktopMan.jpg'
export default function About () {

    return (
        <section className="about-conteiner" id='About'>
            <div className='about-card'> 
                <div>
                    <h1> ABOUT ME </h1>
                    <p>A Short Story about me.................................................</p>
                </div>
                <aside>
                    <h2> Technologies </h2>
                    <div>
                        <ul>
                            <li>TP</li>
                            <li>JS</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <img width={'45%'} src={desktopman} alt='DesktopMan'></img>
                    <div>
                        <p>afsdfasdfds</p>
                    </div>
                </aside>
            </div>
        </section>
    )
}