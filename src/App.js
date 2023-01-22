import './Rules.css';
import './App.css';
import './styles/icons/Icons.scss'
import './styles/planets/Saturn.scss'
import './styles/planets/Sun.scss'
import './styles/planets/Earth.scss'
import './styles/planets/Mercury.scss'
import './styles/planets/Venus.scss'
import './styles/planets/Mars.scss'
import './styles/planets/Jupiter.scss'
import './styles/pure/Home.scss'
import './styles/pure/About.scss'
import './styles/pure/Skills.scss'
import './styles/pure/Experience.scss'
import './styles/pure/Education.scss'
import './styles/pure/Portfolio.scss'
import './styles/pure/NavBar.scss'
import './styles/pure/NotFound.scss'
import './styles/pure/Contact.scss'
import './styles/projects/AtoronProject.scss'
import './styles/projects/JellyProject.scss'
import './styles/projects/JellyBotProject.scss'
import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles-space.json";
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AtoronProjects from './components/projects/AtoronProjects';
import NotFoundPage from './pages/NotFoundPage';
import JellyProjects from './components/projects/JellyProjects';
import JellyBotProjects from './components/projects/JellyBotProjects';
import NavBar from './components/pure/NavBar';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <NavBar></NavBar>
            <main className='main'>
                {/* <NavBar></NavBar> */}
                <Router>
                    <Routes>
                        <Route exact path='/' element={<HomePage/>} />
                        <Route exact path='/atoron-project' element={<AtoronProjects/>} />
                        <Route exact path='/jelly-project' element={<JellyProjects/>} />
                        <Route exact path='/bot-project' element={<JellyBotProjects/>} />
                        <Route path='*' element={<NotFoundPage/>} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
