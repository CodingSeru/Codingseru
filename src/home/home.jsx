import channel from './img/channel.jpg'
import './home.css'
import Typical from 'react-typical';
import Sosial from './sosial';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

function Home() {

    
    return(
        <>
                <header>
            <Parallax speed={-10} className="headertext">
            <motion.h2
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    viewport={{ once: false }} 
                                    transition={{ duration: 0.5, ease: "easeOut" }}
            >Halo saya</motion.h2>
            <motion.h1
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    viewport={{ once: false }} 
                                    transition={{ duration: 0.5, ease: "easeOut" }}
            >Muhammad Rizki Ramadhani</motion.h1>
            <h3>
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'siswa', 2000,
                        'content creator', 2000
                    ]}
                />
            </h3>
            <motion.button 
                whileTap={{ scale: 0.9, transition: { type: "spring", stiffness: 300, duration: 0.5} }}
                initial={{scale: 0, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{delay:0.5}}
                viewport={{ once: false }}
            >
                <a href="#contact">Hubungi</a>
            </motion.button>
            <Sosial/>
            </Parallax>
            <Parallax speed={-10} className="headerimg">
                <motion.div className="bulatheader"
                            initial={{scale: 0, opacity: 0, rotate:41}}
                            whileInView={{scale: 1, opacity: 1}}
                            transition={{type: "spring", stiffness: 65, damping:10, duration:0.5}} 
                            viewport={{ once: false }}
                ></motion.div>
                <motion.img src={channel} alt=""
                            initial={{scale: 0, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            transition={{type: "spring", stiffness: 65, damping:10, duration:0.5, delay:0.5}} 
                            viewport={{ once: false }}
                />
                <motion.div id='logogame'
                            initial={{scale: 0, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            transition={{type: "spring", stiffness: 65, damping:10, duration:0.5, delay:1.3}} 
                            viewport={{ once: false }}
                ><i className="fa-solid fa-gamepad"></i></motion.div>
                <motion.div id='logocode'
                            initial={{scale: 0, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            transition={{type: "spring", stiffness: 65, damping:10, duration:0.5, delay:1}} 
                            viewport={{ once: false }}
                ><i className="fa-solid fa-code"></i></motion.div>
            </Parallax>
        </header>
        </>
    )
}
export default Home