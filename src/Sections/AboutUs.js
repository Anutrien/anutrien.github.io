import React from 'react'

export default function AboutUs(){
  return (
    <div id="about-us" className="article-wrapper">
      <h1>Quem somos</h1>
      <article id="about-us">
        <div>
          <p>
            Preparamos uma alimentação natural caseira,
            balanceada de acordo com as necessidades
            individuais do seu animal.
          </p>
          <p>
            Com ingredientes selecionados oferecemos mais saúde,
            disposição e felicidade para eles!
          </p>
          <p>
            Proteína de excelente qualidade,
            gorduras saudáveis na medida certa,
            carboidratos não inflamatórios e
            enriquecida com legumes, verduras e
            hortaliças, ideal para o paladar exigente
            do seu peludo.
          </p>

          <a href="#services">
            Veja como funciona
            <div className="arrow">↓</div>
          </a>
        </div>
      </article>
    </div>
  )
}