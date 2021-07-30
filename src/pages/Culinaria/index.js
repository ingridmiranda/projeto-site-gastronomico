import './styles.css'
import CulinariaItems from '../../components/CulinariaItems'
import Arabe from '../../images/comida-arabe.jpg'
import Mexican from '../../images/mexican-2456038_1280.jpg'
import Italian from '../../images/pizza-1209748_1920.jpg'
import Burguer from '../../images/hamburguer-5829560_1920.jpg'
import Japan from '../../images/if-the-4665686_1920.jpg'


const Culinaria = ()=>{
    return (
        <div className="container-culinaria-main">
            <h1>Sinta-se em diferentes lugares do mundo experimentando nossos pratos</h1>
            <CulinariaItems imgName={Arabe} name="Árabe"/>
            <CulinariaItems imgName={Mexican} name="Mexicana"/>
            <CulinariaItems imgName={Italian} name="Italiana"/>
            <CulinariaItems imgName={Burguer} name="Fast-Food"/>
            <CulinariaItems imgName={Japan} name="Japonesa"/>
        </div>
    )
}

export default Culinaria;