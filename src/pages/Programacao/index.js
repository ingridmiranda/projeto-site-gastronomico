import './styles.css'
import ProgramacaoItems from '../../components/ProgramacaoItems'
import Arabe from '../../images/arabe.jpg'
import Drinks from '../../images/Uma-noite-de-drinks-é-o-ideal-para-comemorar-o-fim-de-ano.jpg';
import Mexican from '../../images/depositphotos_5396965-stock-photo-charro-mariachi-playing-guitar-mexico.jpg'

const Programacao = ()=>{
    return (
        <div className='container-programacao-main'>
            <h1>Programação da Semana</h1>
            <div>
                <ProgramacaoItems imgName={Arabe} title={"NOITE ÁRABE"} text={"Toda 1ª sexta do mês. Reserve!"}/>
                <ProgramacaoItems imgName={Drinks} title={"HAPPY HOUR"} text={"Diariamente até às 20h. Não perca!"}/>
                <ProgramacaoItems imgName={Mexican} title={"NOITE MEXICANA"} text={"Todas últimas sextas do mês!"}/>  
            </div>

            </div>
    )
}

export default Programacao;