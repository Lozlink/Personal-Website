import { Routes, Route} from 'react-router-dom'
import NavigationBar from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import './app.scss'
import TechStack from './components/Techstack';

function App() {
  return (
    <div className="Port">
      <header>
        <NavigationBar />
      </header>
    {/* <Routes>
      <Route path='/portfolio' element={<About/>}/>
      <Route path='/portfolio/projects' element={<Projects/>}/>
    </Routes> */}

    <About />
    <Projects />
    <TechStack />
    </div>
  );
}

export default App;
 