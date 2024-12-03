import S from './footer.module.scss'
import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import linkedin from '../../assets/linkedin.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/img/twitter'


export default function footer(){
    return(
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""> <img src={face} alt="imagem da rede social facebook" /></a>
                    <a href=""> <img src={insta} alt="imagem da rede social instagram" /></a>
                    <a href=""> <img src={twitter} alt="imagem da rede social twitter" /></a>
                    <a href=""> <img src={linkedin} alt="imagem da rede social de trabalho linkedin" /></a>
                    <a href=""> <img src={youtube} alt="imagem da logo do youtube" /></a>
                </nav>
            </section>
            <section className={S.boxTexto}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}