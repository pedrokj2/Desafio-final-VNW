import S from "./inicio.module.scss";
import balança from "../../assets/balança.png";
import pessoas from "../../assets/pessoas.png";
import união from "../../assets/união.png";
import ler from "../../assets/ler.png";

export default function Inicio() {
  return (
    <main>
      <section className={S.banner}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={S.devoDoar}>
        <div>
          <h2>Porquê devo doar?</h2>
        </div>
        <section className={S.boxCard}>
          <article>
            <img src={pessoas} alt="Imagem de pessoas como figura" />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </article>
          <article>
            <img src={ler} alt="Figura de uma pessoa lendo um livro" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>
          <article>
            <img
              src={união}
              alt="imagem de várias pessoas representando união"
            />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </article>
          <article>
            <img src={balança} alt="imagem de uma balança" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </article>
        </section>
      </section>
    </main>
  )
}
