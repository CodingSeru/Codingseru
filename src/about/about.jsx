import Logoabout from './logo.jpg';
import Sosial from '../home/sosial';
import './about.css';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

function About() {
    return (
        <>
            <section id='about'>
                <div className="logocontact">
                    <img src={Logoabout} alt="logo" />
                    <Parallax translateY={[50, -50, 'easeInOut']} translateX={[10, -30, 'easeInOut']} id='logogame'>
                        <i className="fa-solid fa-gamepad"></i>
                    </Parallax>
                    <Parallax translateY={[-80, 10, 'easeInOut']} translateX={[-30, 10, 'easeInOut']} id='logocode'>
                        <i className="fa-solid fa-code"></i>
                    </Parallax>
                </div>
                <div className='textabout'>
                    <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: false }} 
        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <h2><span>Tentang</span> Saya</h2>
                        <p>Saya adalah seorang content creator yang berfokus pada dunia programming, khususnya front-end web development. Saat ini saya masih dalam tahap belajar, tetapi saya senang membagikan proses dan pengetahuan yang saya pelajari untuk membantu pemula memahami coding dengan cara yang menyenangkan. Dengan pengalaman dan keterampilan di bidang ini, saya menciptakan konten yang sederhana, informatif, dan mudah dipahami, cocok untuk pemula dan calon developer. <br /><br />Melalui karya saya, saya berusaha menginspirasi dan membantu orang lain memahami coding secara menyenangkan.</p>
                    <Sosial />
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default About;