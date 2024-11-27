import S from './inicio.module.scss'
import social from "../../assets/social.png"
import leitura from "../../assets/leitura.png"
import transform from "../../assets/transform.png"
import balança from "../../assets/balança.png"






export default function Inicio(){
    return(
        <section>
            <section className={S.post}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                    <h2>Por que devo doar?</h2>
                </div>
                <section className={S.boxCard}>
                    <article>
                        <img src={social} alt="imagem de um circulo com icones de pessoas entorno dele" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article>
                        <img src={leitura} alt="imagem de um icone de uma pessoa fazendo uma leitura" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={transform} alt="imagem de varios icones de pessoas e acima delas um simbolo de força" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={balança} alt="imagem de um icone de uma balança" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </section>
        </section>
    )
}