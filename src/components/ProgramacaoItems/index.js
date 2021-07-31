import './styles.css'

const ProgramacaoItems = ({title="Evento", imgName="", text="Lorem Ipsum"})=>{
    return (
        <div className="container-programacao">
            <img src={imgName} alt="Culinária"/>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default ProgramacaoItems;