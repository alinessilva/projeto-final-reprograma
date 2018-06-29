import React from 'react'
import octcat from './octocat_250x200.png'
import newrepo from './create-new-repo.png'
import newbranch from './readme-edits.gif'
import commit from './commit.png'
import './CardGit.css'

function CardGit () {
    return(
        <div className="row-cards">
            <h1>É facil, faça seu primeiro commit hoje mesmo!</h1>
                <div className="card">
                    <div>
                        <img  className="card-img" src={octcat} alt="octocat" />
                    </div>
                    <div className="sideB">
                        <h5>O que é GitHub?</h5>
                        <p>O GitHub é uma plataforma de hospedagem de código para controle de versão e colaboração. Ele permite que você e outros trabalhem juntos em projetos de qualquer lugar.</p>
                        <a href="https://guides.github.com/activities/hello-world/" target="_blank">GitHub Guides</a>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img  className="card-img" src={newrepo} alt="imagem da criação de um novo repositório" />
                    </div>
                    <div className="sideB">
                        <h5>Crie um Repositório</h5>
                        <p>Um repositório é geralmente usado para organizar um único projeto. Repositórios podem conter pastas e arquivos, imagens, vídeos, planilhas e conjuntos de dados - qualquer coisa que seu projeto precisar.</p>
                        <a href="https://guides.github.com/activities/hello-world/" target="_blank">GitHub Guides</a>
                    </div>
                </div> 
                <div className="card">
                    <div >
                        <img  className="card-img" src={newbranch} alt="octocat" />
                    </div>
                         <div className="sideB">
                        <h5>Criar um Branch</h5>
                        <p>Criar uma ramificação (branch) é a maneira de trabalhar em diferentes versões de um repositório de uma só vez.Por padrão, seu repositório tem um ramo chamado master que é considerado o ramo definitivo. Usamos ramificações para experimentar e fazer edições antes de enviá-las master.</p>
                        <a href="https://guides.github.com/activities/hello-world/" target="_blank">GitHub Guides</a>
                    </div>
                </div> 
                <div className="card">
                    <div>
                        <img  className="card-img" src={commit} alt="octocat" />
                    </div>
                         <div className="sideB">
                        <h5>Fazer e Confirmar Mudanças</h5>
                        <p>No GitHub, as alterações salvas são chamadas de confirmações . Cada commit tem uma mensagem de commit associada , que é uma descrição explicando porque uma mudança em particular foi feita. As mensagens de confirmação capturam o histórico de suas alterações, para que outros colaboradores possam entender o que você fez e por quê..</p>
                        <a href="https://guides.github.com/activities/hello-world/" target="_blank">GitHub Guides</a>
                    </div>
                </div> 
                <div className="card">
                    <div>
                        <img  className="card-img" src={octcat} alt="octocat" />
                    </div>
                         <div className="sideB">
                        <h5>Abrir uma Solicitação de Pull</h5>
                        <p>Pull Requests é o coração da colaboração no GitHub. Quando você abre uma solicitação de recebimento , está propondo suas alterações e solicitando que alguém revise e inclua sua contribuição e as mescle em sua ramificação. Pedidos pull mostram diffs , ou diferenças, do conteúdo de ambos os branches. As alterações, adições e subtrações são mostradas em verde e vermelho.</p>
                        <a href="https://guides.github.com/activities/hello-world/" target="_blank">GitHub Guides</a>
                    </div>
                </div> 
        </div>
    )
}

export default CardGit