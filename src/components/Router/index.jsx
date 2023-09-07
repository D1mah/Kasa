// Import du système de routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import des pages
import Home from '../../pages/Home'
// import Lodgings from '../../pages/Lodgings'
// import About from '../../pages/About'

// Import des composants

// import Error from '../Error'
import Header from "../Header"
import Footer from "../Footer"


function KasaRouter(){
    return(
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path='*' element={<Error/>} />
            <Route path="/lodgings" element={<Lodgings/>} />
            <Route path="/about" element={<About/>}/> */}
        </Routes>
        <Footer/>
    </Router>)
}

export default KasaRouter