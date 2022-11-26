import './Scss/App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/proyectos' element={<Projects />} />
                <Route path='/habilidades' element={<Skills />} />
                <Route path='/contacto' element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
    }

export default App
