import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/tanishq-gupta-302669253/" target="blank"><BsLinkedin /></a>
        <a href="https://github.com/Spydiecy/" target="blank"><FaGithub /></a>
        <a href="https://dribbble.com/Spydiecy/" target="blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials