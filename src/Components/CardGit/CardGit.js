import React from 'react'
import git from './git.png'
import newrepo from './new-repo.png'
import newbranch from './readme-edits.gif'
import commit from './commit.png'
import merge from './merge-button.png'
import pull from './pull.png'
import './CardGit.css'

function CardGit () {
    return(
        <div className="row-cards">
            <h1>É facil, comece fazendo seu primeiro commit!</h1>
                <div className="card">
                    <div className='sideA'>
                        <img src={git} alt="print scream de um repositório" />
                    </div>
                    <div className="sideB">
                        <h5>O que é GitHub?</h5>
                        <p>O GitHub é uma plataforma de hospedagem de código para controle de versão e colaboração. Ele permite que você e outros trabalhem juntos em projetos de qualquer lugar.</p>
                        <a href="https://guides.github.com/activities/hello-world/#what" rel="noopener">GitHub Guides</a>
                    </div>
                </div>
                <div className="card">
                    <div className='sideA'>
                        <img src={newrepo} alt="print scream da criação de um novo repositório" />
                    </div>
                    <div className="sideB">
                        <h5>Crie um Repositório</h5>
                        <p>Um repositório é geralmente usado para organizar um único projeto. Repositórios podem conter pastas e arquivos, imagens, vídeos, planilhas e conjuntos de dados - qualquer coisa que seu projeto precisar.</p>
                        <a href="https://guides.github.com/activities/hello-world/#repository" rel="noopener">GitHub Guides</a>
                    </div>
                </div> 
                <div className="card">
                    <div className='sideA'>
                        <img src={newbranch} alt="print scream de uma branch" />
                    </div>
                         <div className="sideB">
                        <h5>Criar uma Branch</h5>
                        <p>Criar uma ramificação (branch) é a maneira de trabalhar em diferentes versões de um repositório de uma só vez.Por padrão, seu repositório tem um ramo chamado master que é considerado o ramo definitivo. Usamos ramificações para experimentar e fazer edições antes de enviá-las master.</p>
                        <a href="https://guides.github.com/activities/hello-world/#branch" rel="noopener">GitHub Guides</a>
                    </div>
                </div> 
                <div className="card">
                    <div className='sideA'>
                        <img src={commit} alt="print scream de um merge" />
                    </div>
                         <div className="sideB">
                        <h5>Fazer e Confirmar Mudanças</h5>
                        <p>No GitHub, as alterações salvas são chamadas de commits . Cada commit tem uma mensagem de commit associada , que é uma descrição explicando porque uma mudança em particular foi feita. As mensagens de confirmação capturam o histórico de suas alterações, para que outros colaboradores possam entender o que você fez e por quê.</p>
                        <a href="https://guides.github.com/activities/hello-world/#commit" rel="noopener">GitHub Guides</a>
                    </div>
                </div> 
                <div className="card">
                    <div className='sideA'>
                        <img src={pull} alt="print scream de um pull request" />
                    </div>
                         <div className="sideB">
                        <h5>Abrir uma Solicitação de Pull</h5>
                        <p>Pull Requests é o coração da colaboração no GitHub. Quando você faz uma solicitação pull request, está propondo suas alterações e solicitando que alguém revise e inclua sua contribuição e as mescle em sua branch. Pedidos pull mostram diffs, ou diferenças, do conteúdo de ambas as branches. As alterações, adições e subtrações são mostradas em verde e vermelho.</p>
                        <a href="https://guides.github.com/activities/hello-world/#pr" rel="noopener">GitHub Guides</a>
                    </div>
                </div>
                <div className="card">
                    <div className='sideA'>
                        <img src={merge} alt="print scream de um merge" />
                    </div>
                         <div className="sideB">
                        <h5>Mesclar seu pedido pull</h5>
                        <p>Nesta etapa final, é hora de unir suas alterações - mesclar sua readme-edits ramificação à master filial.</p>
                        <a href="https://guides.github.com/activities/hello-world/#pr" rel="noopener">GitHub Guides</a>
                    </div>
                </div> 
        </div>
    )
}

export default CardGit