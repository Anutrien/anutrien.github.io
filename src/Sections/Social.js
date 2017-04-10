import React from 'react'

const SocialLink = ({ name, icon, link }) => (
  <div className="flex-grid-item text-center">
    <a href={link} target="_blank">
      <i className={icon}/>
      <h3>{name}</h3>
    </a>
  </div>
)

export default function Social({ socialLinks }){
  return (
    <div id="socials">
      <h1>Continue com a gente!</h1>
      <article id="stay-with-us">
        <div className="flex-grid flex-grid-center">
          {
            socialLinks.map(socialLink => <SocialLink {...socialLink} />)
          }
        </div>
        <a
          href="https://astrocoders.com"
          target="_blank"
        >
          feito com ♡ por Astrocoders
        </a>
      </article>
    </div>
  )
}
