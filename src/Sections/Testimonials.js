import React from 'react'
import isEmpty from 'lodash/isEmpty'

const Testimonial = ({ name, from, quote, link, photo }) => (
  <div className="flex-grid-item text-center">
    <img src={photo} alt="Depoimento Anutrien" />
    <h2>{name}</h2>
    <small>{from}</small>
    <p><span>{quote}</span></p>
  </div>
)

export default function Testimonials({ testimonials }){
  return (
    !isEmpty(testimonials) &&
    <div id="testimonials" className="article-wrapper">
      <h1>Depoimentos</h1>
      <article id="testimonials">
        <div className="flex-grid flex-grid-center">
          {
            testimonials.map(testimonial => (
              <Testimonial key={testimonial.link} {...testimonial} />
            ))
          }
        </div>
      </article>
    </div>
  )
}