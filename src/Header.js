import React from 'react'
import { componentDidMount } from 'react-lifecycle-hoc'

function Header(){
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#anutrien" className="scroll">
            <p>Anutrien</p>
          </a>
        </div>
        <div className="links">
          <a href="#about-us" className="scroll">Quem Somos</a>
          <a href="#services" className="scroll">Serviços</a>
          <a href="#socials" className="scroll">Continue com a gente!</a>
        </div>
      </nav>
    </header>
  )
}

export default componentDidMount(
  () => {
    window.addEventListener('scroll', () => {
      const servicesTop = document.getElementById('about-us').offsetTop - 64;
      if (window.scrollY > servicesTop) {
        document.getElementsByTagName('nav')[0].className = "active";
      } else {
        document.getElementsByTagName('nav')[0].className = "";
      }
    })
  }
)(Header)
