import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2 class='bouncing-letters'> <span>S</span><span>e</span><span>r</span><span>v</span><span>i</span><span>c</span><span>e</span><span>s</span> </h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Application Developement</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF Application Developement */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Developement</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV */}

        <article className='service'>
          <div className="service__head">
            <h3>Graphic Designing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*END OF GRAPHIC DESIGN */}
      </div>
    </section>
  )
}

export default Services