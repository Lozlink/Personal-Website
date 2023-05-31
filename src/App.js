
import NavigationBar from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import './app.scss'
import TechStack from './components/Techstack';
import Experience from './components/Experience';
import Education from './components/education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="Port">
      <header class='header'>
        <NavigationBar />
      </header >
    {/* <Routes>
      <Route path='/portfolio' element={<About/>}/>
      <Route path='/portfolio/projects' element={<Projects/>}/>
    </Routes> */}

    <About />
    <Projects />
    <TechStack />
    <Experience />
    <Education />
    <Contact />
    </div>
  );
}

export default App;
 