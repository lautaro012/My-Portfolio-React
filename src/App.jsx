import Home from './component/Home/Home';
import Contactme from './component/contactme/contactme';
import Projects from './component/Projects/Projects';
import About from './component/About/About';
import Footer from './component/Footer/Footer';

import NavBar from './component/NavBar/NavBar';
import './App.css';

function App() {
 
    return (
        <div className='App'>
            <NavBar/>
                <Home/>
                <About/>
                <Projects/>
                <div className='footer-contact-conteiner'>
                    <Contactme/>
                    <Footer/>
                </div>
        </div>
    );
}

export default App;
