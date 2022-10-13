import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import contactImg from "../../assets/contact-img.svg";
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2 class='bouncing-letters'> <span>A</span><span>b</span><span>o</span><span>u</span><span>t</span> <span>M</span><span>e</span> </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={contactImg} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Clients Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Hi Tanishq here. Obviously! <br></br>
            I am a student working out of India and I am constantly looking for ground-breaking solutions to issues that arise in daily life.
            For me, each project I have the privilege to work on is a new opportunity to learn new things, meet people with ideas that differ from mine and discover things about myself I never knew were beneath the layers of all of me.
          </p>

          <a href="#contact" className=''>
            <button class="cybr-btn">
              Let's Connect
              <span aria-hidden>_</span>
              <span aria-hidden class="cybr-btn__glitch">Let's Connect_</span>
              <span aria-hidden class="cybr-btn__tag">R25</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About