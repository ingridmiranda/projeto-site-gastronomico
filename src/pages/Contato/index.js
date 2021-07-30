import './styles.css'


const Contato = ()=>{
    const clearData = () =>{
        document.getElementById('inputName').value="";
        document.getElementById('inputPhone').value="";
        document.getElementById('inputEmail').value="";
        document.getElementById('inputAssunto').value="";
        document.getElementById('inputMensagem').value="";
        alert("Agradecemos pelo contato! Em breve responderemos seu chamado!")
    }
    return (
        <main className="container-contato">
        
            <h1>Dúvidas, sugestões ou reservas? Fale conosco!</h1>
            <div>
                <div className="container-first-line">
                    <div>
                        <h2>Nome</h2>
                        <input type="text" id="inputName"/>
                    </div>
                    <div>
                        <h2>Telefone</h2>
                        <input type="phone" id="inputPhone"/>
                    </div>
                </div>
                <div>
                    <h2>Email</h2>
                    <input text id="inputEmail"/>
                </div>
                <div>
                    <h2>Assunto</h2>
                    <input text id="inputAssunto"/>
                </div>
                <div>
                    <h2>Mensagem</h2>
                    <textarea text id="inputMensagem"/>
                </div>
            </div>   
            <a onClick={clearData}>ENVIAR</a>         
        </main>

    )
}

export default Contato;