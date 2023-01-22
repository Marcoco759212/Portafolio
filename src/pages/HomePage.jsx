import React from 'react';
import About from '../components/pure/About';
import Contact from '../components/pure/Constact';
import Education from '../components/pure/Education';
import Experience from '../components/pure/Experience';
import Home from '../components/pure/Home';
import Portfolio from '../components/pure/Portfolio';
import Skills from '../components/pure/Skills';

const HomePage = () => {
    return (
        <>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Education></Education>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </>
    );
}

export default HomePage;
