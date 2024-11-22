import logo from '../../assets/img/logo.png'
import busca from '../../assets/img/busca.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/Inicio'
import Doados from '../../Pages/Doados/Doados'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'
import S from './header.module.scss'

export default function header(){
    return(
        <BrowserRouter>
        <header>
        <section className={S.boxLogo}>
            <img src={logo} alt="logo de um livro" />
            <h1>Livros Vai na web</h1>
        </section>
            <nav className={S.boxMenu}>
              <ul>
                 <li><Link to="/" >Inicio</Link></li>
                 <li><Link to="/doados" >Livros Doados</Link></li>
                 <li><Link to="/quero Doar" >Quero Doar</Link></li>
              </ul>
            </nav>
            <div className={S.boxInput}>
                <input type="text" placeholder='o que voce procura' />
                <img src={busca} alt="" />
            </div>
        </header>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/doados" element={<Doados/>}/>
            <Route path="/quero doar" element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    )
}
