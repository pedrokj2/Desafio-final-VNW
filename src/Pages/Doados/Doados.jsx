import S from './doados.module.scss'
import book from '../../assets/book.png'


export default function Doados(){
    return(
        <section className={S.boxDoados}>
            <h2> Livros Doados</h2>
            <section className={S.boxCard}>
                <article>
                    <img src={book} alt="imagem do livro chamado protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    )
}