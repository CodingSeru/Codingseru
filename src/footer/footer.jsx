import './footer.css'
import { motion } from 'framer-motion'

function Footer() {
    return(
        <>
        <footer>
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{once: false}}>Coding Seru</motion.h2>
            <motion.div className="sosialF" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{once: false}}>
        <a href="https://github.com/CodingSeru/"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/codingseru1/"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.youtube.com/channel/UCYV7z5V1TqQAHCbIl8qwr3g"><i className="fa-brands fa-youtube"></i></a>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{once: false}}>m78764321@gmail.com</motion.p>
            <motion.ul className='menuFooter' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{once: false}}>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portofolio">Portfolio</a></li>
                <li><a href="#content">Content</a></li>
                <li><a href="#contact">Contact</a></li>
            </motion.ul>
        </footer>
        </>
    )
}
export default Footer