import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiDiscord} from 'react-icons/si'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vg4psle', 'template_37omvmi', form.current, 'Yf7lc-ykmSzEQ9la6')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2 class='bouncing-letters'> <span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span> <span>M</span><span>e</span> </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>spydiecy@gmail.com</h5>
            <a href="mailto:spydiecy@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <SiDiscord className='contact__option-icon' />
            <h4>Discord</h4>
            <h5>Spydiecy#8136</h5>
            <a href="https://discord.com/" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <AiFillQuestionCircle className='contact__option-icon' />
            <h4>?</h4>
            <h5>?</h5>
            <a href="#" target="_blank">Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact