import Home from './component/Home/Home';
import Contactme from './component/contactme/contactme';
import Projects from './component/Projects/Projects';
import About from './component/About/About';

import NavBar from './component/NavBar/NavBar';
import './App.css';

function App() {
 
    return (
        <div className='App'>
            <NavBar/>
                <Home/>
                <About/>
                <Projects/>
                <Contactme/>
        </div>
    );
}

export default App;
