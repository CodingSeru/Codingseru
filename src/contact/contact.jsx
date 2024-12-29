import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import logocontact from './logo.jpg'
import './contact.css'
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      alert("terkirim")
      emailjs
        .sendForm('service_o3je65f', 'template_ufvhhqw', form.current, {
          publicKey: 'j68n78sa74MH5K5CB',
        })
    };
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
        <section id="contact">
            <motion.h2
                                    variants={textVariants} 
                                    initial="hidden" 
                                    whileInView="visible" 
                                    viewport={{ once: false }}
            ><span>Hubungi</span> saya</motion.h2>
            <div className="contact">
                <div className="logocontact">
                    <img src={logocontact} alt="logo"/>
                    <Parallax translateY={[50, -50, 'easeInOut']} translateX={[10, -30, 'easeInOut']} id='logogame'><i className="fa-solid fa-gamepad"></i></Parallax>
                    <Parallax translateY={[-80, 10, 'easeInOut']} translateX={[30, -10, 'easeInOut']} id='logocode'><i className="fa-solid fa-code"></i></Parallax>
                </div>
                <motion.form ref={form} onSubmit={sendEmail}
                            initial={{scale: 0, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            transition={{type: "spring", stiffness: 50, damping:10, duration:0.5}} 
                            viewport={{ once: false }}
                >
                    <label htmlFor="name">Nama:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="message">Pesan:</label>
                    <textarea id="message" name="message" required ></textarea>
                    
                    <motion.button type="submit"
                        whileTap={{ scale: 0.9, transition: { type: "spring", stiffness: 300 } }}
                    >
                        Kirim
                    </motion.button>
                </motion.form>
            </div>
        </section>
        </>
    )
}

export default Contact