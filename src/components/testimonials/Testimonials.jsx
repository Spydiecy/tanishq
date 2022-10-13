import React from 'react'
import './testimonials.css'
import ME from '../../assets/me-about.jpg'
import contactImg from "../../assets/contact-img.svg";
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const testimonials = () => {
  return (
    <section id='about'>
      <h5>What Are My</h5>
      <h2 class='bouncing-letters'> <span>H</span><span>o</span><span>b</span><span>b</span><span>i</span><span>e</span><span>s</span> </h2>

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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repellat quasi est labore, ullam debitis dicta at inventore, et soluta, doloremque exercitationem. Culpa voluptas consequatur quibusdam, incidunt totam nostrum dolore?
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

export default testimonials