import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"
import S from "./footer.module.scss"


export default function footer() {
  return (
    <footer>
        <section className={S.boxSocial}>
            <h3>4002-8922</h3>
            <nav>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100008856458531"><img src={facebook} alt="icone do facebook" /></a>
                <a target="_blank" href="https://x.com/maisacastro_0"><img src={twitter} alt="icone do twitter" /></a>
                <a target="_blank" href="https://www.youtube.com/@maisacastro"><img src={youtube} alt="icone do youtube" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/maisa-castro-2901831b1/"><img src={linkedin} alt="icone do linkedin" /></a>
                <a target="_blank" href="https://www.instagram.com/maisa.sthlr/"><img src={instagram} alt="icone do instagram" /></a>
            </nav>
        </section>
        <section className={S.boxEnd}>
            <p>
            Layout desenvolvido pela Vai Na Web para fins educativos - 2024   
            </p>
        </section>
    </footer>
  )
}
