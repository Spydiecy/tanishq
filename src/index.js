import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import './components/header/header.css'
import './components/about/about.css'
import './components/contact/contact.css'
import './components/testimonials/testimonials.css'
import './components/services/services.css'
import './components/portfolio/portfolio.css'
import './components/experience/experience.css'


ReactDOM.render(<App/>, document.querySelector("#root"))

document.querySelectorAll(".bouncing-letters span").forEach((span) => {
    span.addEventListener("mouseover", function () {
      this.classList.add("bounce");
      setTimeout(
        function () {
          this.classList.remove("bounce");
        }.bind(this),
        1000
      );
    });
  });




