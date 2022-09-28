import './About.css'
import desktopman from '../../images/DesktopMan.jpg'
import HTML from '../../images/icons/HTML.png'
import BOOTSTRAP from '../../images/icons/BOOTSTRAP.png'
import JS from '../../images/icons/JS.png'
import REACT from '../../images/icons/REACT.png'
import MYSQL from '../../images/icons/MYSQL.png'
import NODEJS from '../../images/icons/NODEJS.png'
import POSTGRESSQL from '../../images/icons/POSTGRESSQL.png'
import REDUX from '../../images/icons/REDUX.png'
import CSS from '../../images/icons/CSS.png'
import Icons from '../Icons/Icons'

const icons = [
    {
        name:'HTML',
        image: HTML
    },
    {
        name:'CSS',
        image:CSS
    },
    {
        name:'Javascript',
        image:JS
    },
    {
        name:'MYSQL',
        image:MYSQL
    },
    {
        name:'React',
        image: REACT
    },
    {
        name:'Redux',
        image:REDUX
    },
    {
        name: 'NodeJS' ,
        image: NODEJS
    },
    {
        name:'PostgresSQL',
        image:POSTGRESSQL
    },
    {
        name:'Bootstrap',
        image:BOOTSTRAP
    }

]

export default function About () {

    return (
        <section className="about-conteiner" id='About'>
            <div className='about-card'> 
                <div className='aside-about'>
                    <h1> ABOUT ME </h1>
                    <div className='below-h1'>
                        <div className='about-text'>
                            <p> I am a Full Stack Developer with experience in Front-End and Back-End application development. 
                            </p>
                            <p>
                                I've been a programming enthusiast since a was a child. This led me to learn python when 
                                I was 15 years old and some time later Javascript and React
                            </p>
                            <p>
                                I love learning new technologies and learning how to apply them efficiently to solve logic problems.
                            </p>
                            <p>
                                Feel free to check some of my past, currents and future projects ! 
                            </p>
                            <p><u>More about me:</u></p>
                            <p>
                                I love playing piano, my favorite sport is Voleyball and im my favorite Video game genre is RPG   
                            </p>
                        </div>
                    </div>
                </div>
                <div className='aside-about'>
                    <h1> My Skills and Technologies </h1>
                    <div className='below-h1'>
                        <div className='about-card-icons'>
                            <img className='about-card-icons-image'  src={desktopman} alt='DesktopMan'></img>
                            <ul>
                            {
                                icons.map(icon => {
                                    return(
                                        <Icons name={icon.name} image={icon.image}></Icons>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}