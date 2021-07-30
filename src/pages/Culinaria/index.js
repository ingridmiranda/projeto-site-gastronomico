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
            <CulinariaItems imgName={Arabe} title="ÁRABE" text="Esse tipo de culinária possui um aroma fantástico devido aos temperos e especiarias. Sendo assim, é muito rica em grãos e carne. Priorizando sempre o sabor em cada prato. Os pratos mais pedidos são: Falafel assado, Charuto de folha de uva e Arroz sírio acompanhado de Kafta no espeto."/>
            <hr />
            <CulinariaItems imgName={Mexican} title="MEXICANA" text="O México foi o primeiro país a ter sua gastronomia reconhecida como Patrimônio Imaterial da Humanidade pela Unesco. Este fato aconteceu em 2010, e foi conquistado por conta do respeito e honra aos mais de mil anos de tradição. É muito conhecida pelos seus pratos com temperos fortes e marcantes. Nossas especialidades: Pan de cazón, Pozoles e Peixe Zarandeado"/>
            <hr />
            <CulinariaItems imgName={Italian} title="ITALIANA" text="A gastronomia Italiana traduz poesia ao paladar com sua combinação incrível de sabores, e é uma das opções favoritas das pessoas ao redor do mundo. É repleta de receitas passadas de geração em geração, sendo assim uma culinária afetiva. Os destaques da casa são: Gnocchi, Ossobuco acompanhado de Risotto e para sobremesa o Tiramisu."/>
            <hr />
            <CulinariaItems imgName={Burguer} title="NORTE-AMERICANA" text="Os Estados Unidos são considerados como o rei dos fast foods. Mas também possui suas particularidades, principalmente porque é uma culinária que teve influência de diversas culturas. Pratos que fazem sucesso: Mac and Cheese, Waffles, Barbecue Ribs e para adoçar Apple Pie."/>
            <hr />
            <CulinariaItems imgName={Japan} title="JAPONESA" text="Os japoneses são amplamente conhecidos por possuirem hábitos saudáveis de alimentação, mas sem deixar de lado o sabor dos alimentos e as técnicas de requinte. Segue uma regra que enfatiza o uso de 5 cores (preto, branco, vermelhor, amarelo e verde), 5 técnicas de cocção (comida crua, grelhada, a vapor, cozida e frita) e 5 sabores (doce, picante, salgado, ácido e amargo) em uma única refeição. Pratos para conhecer: Lámen, Ichiju-sansai, Tempura e Guioza."/>
        </div>
    )
}

export default Culinaria;