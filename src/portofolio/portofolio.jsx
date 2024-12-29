import clickcounter from './img/clickcounter.png'
import sumberbening from './img/sumberbening.png'
import './portofolio.css'
import { motion } from 'framer-motion'

function Portofolio() {
    const textVariants = {
        hidden: { opacity: 1, scaleX: 0.8 }, 
        visible: { 
            opacity: 1, 
            scaleX: 1, 
            transition: { duration: 0.5 } 
        }
    };
    return(
        <>
        <section id='portofolio'>
        <motion.h2
                        variants={textVariants} 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: false }}
        ><span>Portofolio</span> Saya</motion.h2>
        <div className="container-cardfolio">
            <motion.div className="card"
            initial={{scale: 0, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            transition={{type: "spring", stiffness: 65, damping:10, duration:0.5}} 
            viewport={{ once: false }}
            >
                <img src={clickcounter} alt="Click Counter" />
                <div className="overlay">
                    <h3>Click Counter</h3>
                    <p>Website penghitung klik.</p>
                    <a href="https://codingseru.github.io/Clickcounter/" target="_blank" rel="noopener noreferrer">Lihat Project &nbsp;<i className='fa-solid fa-arrow-right'></i></a>
                </div>
            </motion.div>
            <motion.div className="card"
                        initial={{scale: 0, opacity: 0}}
                        whileInView={{scale: 1, opacity: 1}}
                        transition={{type: "spring", stiffness: 65, damping:10, duration:0.5}} 
                        viewport={{ once: false }}
            >
                <img src={sumberbening} alt="Sumber Bening" />
                <div className="overlay">
                    <h3>Sumber Bening</h3>
                    <p>Website untuk memperkenalkan bisnis</p>
                    <a href="https://codingseru.github.io/sumberbening/" target="_blank" rel="noopener noreferrer">Lihat Project &nbsp;<i className='fa-solid fa-arrow-right'></i></a></div>
            </motion.div>
        </div>
        </section>
        </>
    )
}

export default Portofolio