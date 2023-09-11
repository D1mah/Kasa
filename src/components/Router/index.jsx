// Import du système de routing
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// Import des pages
import Home from '../../pages/Home'
import Lodge from '../../pages/Lodge'
import About from '../../pages/About'

// Import des composants

import Error from '../Error'
import Header from "../Header"
import Footer from "../Footer"

// Outlet to hide footer in error page
function PageLayout() {
  return (
    <div>
        <Outlet /> 
        <Footer />
    </div>
)
}

function KasaRouter(){
    return(
    <Router>
        <Header/>
        <Routes>
            <Route element={<PageLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/lodge/:id" element={<Lodge/>} />
                <Route path="/about" element={<About/>}/>
            </Route>
            <Route path='*' element={<Error/>} />
        </Routes>
    </Router>)
}

export default KasaRouter