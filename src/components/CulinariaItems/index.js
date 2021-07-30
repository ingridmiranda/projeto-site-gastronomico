import './styles.css'

const CulinariaItems = ({title="Culinária", imgName="", text="Lorem Ipsum"})=>{
    return (
      <main className="container-culinaria">
          <img src={imgName} alt="Culinária"/>
          
          <div>
            <h2>{title}</h2>
          <p>{text}</p>
          </div>

        </main>)
}

export default CulinariaItems;