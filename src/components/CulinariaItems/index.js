import './styles.css'

const CulinariaItems = ({name="Culinária", imgName=""})=>{
    return (
        <div className="container-culinaria">
          <img src={imgName} alt="Culinária"/>
          <p>{name}</p>
        </div>
    )
}

export default CulinariaItems;