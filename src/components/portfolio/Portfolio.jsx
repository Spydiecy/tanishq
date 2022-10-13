import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Sample 1',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Sample 2',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Sample 3',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Sample 4',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Sample 5',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Sample 6',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2 class='bouncing-letters'> <span>P</span><span>o</span><span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span> </h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio