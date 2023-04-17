import About from "./pages/About"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import { Routes , Route  } from "react-router-dom"
import 'aos/dist/aos.css';
import AOS from 'aos';
const App = () => {
  AOS.init({
    startEvent : 'load'
  });
  return (
    <>
     <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
</Routes>
     <Footer/>
    </>
  )
}

export default App
