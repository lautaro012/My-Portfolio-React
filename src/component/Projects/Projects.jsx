import './Project.css'
import Cards from '../Cards/Cards'
export default function Projects () {
   
    return (
        <section id='Projects' className="project-conteiner">
            <h1> PROJECTS </h1>
            <div className='cards-conteiner'>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </div>
        </section>
    )
}