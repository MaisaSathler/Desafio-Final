import S from "./doados.module.scss"
import protagonista from "../../assets/protagonista.png"
import mobyDick from "../../assets/mobyDick.jpg"
   
   
   
   export default function Doados(){
    return(
        
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
        
        <section className={S.boxBooks}>
            <article>
                <img src={protagonista} alt="" />
                <h3>O protagonista</h3>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
            </article>
            <article>
                <img src={mobyDick} alt="" />
                <h3>Moby Dick</h3>
                <p>Herman Melville</p>
                <p>Romance</p>
            </article>
            
        </section>
        </section>
        
        
    )
   }