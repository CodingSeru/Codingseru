import './App.css'
import Navbar from './navbar/navbar'
import Home from './home/home'
import About from './about/about'
import Portofolio from './portofolio/portofolio'
import Content from './content/content'
import Contact from './contact/contact'
import Footer from './footer/footer'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

  return (
    <>
    <ParallaxProvider>
    <Navbar/>
    <Home/>
    <main>
    <About/>
    <Content/>
    <Portofolio/>
    <Contact/>
    </main>
    <Footer/>
    </ParallaxProvider>
    </>
  )
}

export default App
