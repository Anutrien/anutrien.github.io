import React from 'react'

export default function Services(){
  return (
    <div id="services" className="article-wrapper">
      <h1>Serviços</h1>
      <article id="services">
        <div className="flex-grid">
          <div className="flex-grid-item">
            <i className="fa fa-check-circle"/>
            <h3>Faça você mesmo</h3>
            <p>com uma consultoria online, ou presencial, você mesmo pode preparar a alimentação natural do seu peludo. Basta entrar em contato e marcar uma consulta.
Você recebe uma formulação completa e individualizada de acordo com as necessidades do seu animal com opções de cardápios.</p>
          </div>
          <div className="flex-grid-item">
            <i className="fa fa-paw"/>
            <h3>Assinatura mensal</h3>
            <p>com uma consultoria online, ou presencial, a formulação ideal para o seu peludo será preparada.
Feita com ingredientes selecionados a alimentação netural será entregue prontinha em sua casa.</p>
          </div>
        </div>
      </article>
    </div>
  )
}