import './home.css'
import { motion } from 'framer-motion'
function Sosial() {
    return(
        <div className="sosial">
        <motion.a href="https://github.com/CodingSeru/"
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        viewport={{once:false}}
        transition={{duration:0.5, delay:1}}
        ><i className="fa-brands fa-github"></i></motion.a>
        <motion.a href="https://www.instagram.com/codingseru1/"
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                viewport={{once:false}}
                transition={{duration:0.5, delay:1}}
        ><i className="fa-brands fa-instagram"></i></motion.a>
        <motion.a href="https://www.youtube.com/channel/UCYV7z5V1TqQAHCbIl8qwr3g"
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                viewport={{once:false}}
                transition={{duration:0.5, delay:1}}
        ><i className="fa-brands fa-youtube"></i></motion.a>
    </div>
    )
}
export default Sosial