import { Routes, Route} from 'react-router-dom'
import NavigationBar from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import './app.scss'

function App() {
  return (
    <div className="Port">
      <header>
        <NavigationBar />
      </header>
    <Routes>
      <Route path='/portfolio' element={<About/>}/>
      <Route path='/portfolio/projects' element={<Projects/>}/>
    </Routes>
    </div>
  );
}

export default App;
 