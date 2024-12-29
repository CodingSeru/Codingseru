import './navbar.css';
import navlogo from './img/logo.png'
import { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return(
        <>
        <nav>
            <motion.div className="logoNav"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{once: false}}
            >
                <img src={navlogo} alt="logo"/>
                <h3>CodingSeru</h3>
            </motion.div>
            <motion.ul className={`menuNav ${menuOpen ? 'open' : ''}`}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{once: false}}
            >
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portofolio">Portfolio</a></li>
                <li><a href="#content">Content</a></li>
                <li><a href="#contact">Contact</a></li>
            </motion.ul>
            <motion.div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{once: false}}
            >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </motion.div>
        </nav>
        </>
    )
}

export default Navbar