import './styles.css'

const Contato = ()=>{
    return (
        <main className="container-contato">
        
            <h1>Dúvidas, sugestões ou reservas? Fale conosco!</h1>
            <div>
                <div className="container-first-line">
                    <div>
                        <h2>Nome</h2>
                        <input text />
                    </div>
                    <div>
                        <h2>Telefone</h2>
                        <input text />
                    </div>
                </div>
                <div>
                    <h2>Email</h2>
                    <input text />
                </div>
                <div>
                    <h2>Assunto</h2>
                    <input text />
                </div>
                <div>
                    <h2>Mensagem</h2>
                    <textarea text />
                </div>
            </div>            
        </main>
    )
}

export default Contato;