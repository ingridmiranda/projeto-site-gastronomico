import './styles.css'
import Restaurant from '../../images/restaurant-690569_1920.jpg'

const Home = ()=>{
    return (
        <div className="container-home">
            <img src={Restaurant} alt="gastronomia"/>
            <h1> O melhor da gastronomia em um só lugar</h1>
            <h2>Iniciamos no ano de 2015 em Brasília/DF como um restaurante de pratos típicos da América Latina. Esta unidade foi inspiração para a criação do El Complejo Gastrónomico, que desde então vem encantando e atraindo clientes para a capital do Brasil.</h2>
            <h2>Possui especialidade em fornecer pratos de vários locais da culinária mundial, com um amplo e variado cardápio, repleto de comidas e bebidas diferenciadas, feitas com os melhores ingredientes. Os pratos são bem servidos e possuem preços acessíveis.</h2>
            <h2>Nosso complexo é amplo, possui itens de decoração típica dos países homenageados, oferecendo aos nossos clientes um ambiente  aconchegante e instagramável.</h2>
            <h2>Faça uma visita e sinta-se em um pedacinho de outro país!</h2>
        </div>
    )
}

export default Home;