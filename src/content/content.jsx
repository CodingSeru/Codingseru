import { motion } from 'framer-motion';
import './content.css'
function Content() {
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
        <section id="content">
        <div className="obstacle" />
        <motion.h2
                variants={textVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: false }}
        ><span>Skill</span> Saya</motion.h2>
        <div className="skill-container">
            <div className="skill">
                <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: false }} 
                        transition={{ duration: 0.5, ease: "easeOut" }}
                >Front-end web developer</motion.h3>
                <motion.ul
                                                        initial={{ opacity: 0, x: -50 }}
                                                        whileInView={{ opacity: 1, x: 0 }} 
                                                        viewport={{ once: false }} 
                                                        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                >
                    <li><h4>HTML</h4><p>saya sudah cukup ahli di HTML.</p></li>
                    <li><h4>CSS</h4><p>saya sudah cukup ahli di dalam dasar CSS.</p></li>
                    <li><h4>JavaScript</h4><p>Saya sudah menguasai DOM, dan beberapa Javascript dasar.</p></li>
                    <li><h4>React.js</h4><p>Saya masih baru mempelajari React.js.</p></li>
                </motion.ul>
            </div>
            <div className="skill">
                <motion.h3
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }} 
                                        viewport={{ once: false }} 
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                >Editing</motion.h3>
                <motion.ul
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }} 
                                        viewport={{ once: false }} 
                                        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                >
                    <li><h4>CapCut</h4></li>
                    <li><h4>PixelLab</h4></li>
                    <li><h4>Canva</h4></li>
                </motion.ul>
            </div>
        </div>
        </section>
        </>
    )
}
export default Content