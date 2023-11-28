// Styles
import './App.scss'

// Symbols & images
import whiteLogo from '../public/img/VDS-FullLogo-White-CMYK.svg'

// Components
import Hero from './components/Hero'
import TestimonialSlider from './components/TestimonialSlider'
import Services from './components/Services'
import SmallHeading from './components/SmallHeading'
import TeamContent from './components/TeamContent'
import HighlightBanner from './components/HighlightBanner'

function App() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Highlights */}
      <HighlightBanner />

      {/* Services */}
      <section id="services" className="container" style={{ paddingTop: "50px" }}>
        <Services />
      </section>

      {/* Team */}
      <div id="team" className='alt-section'>
        <section className='container'>
          <hgroup>
            <SmallHeading symbol="people" text="Team" />
            <h2>Meet our team of talented data scientists</h2>
            <h3>
              People are what make Vindhya great.
              Click below to meet our "Vindhyaneers".
            </h3>
          </hgroup>
          <TeamContent />
        </section>
      </div>
      
      {/* Testimonials */}
      <section className='container-fluid'>
        <div className='container'>
          <hgroup>
            <SmallHeading symbol="chat" text="Testimonials" />
            <h2>From our clients</h2>
            <h3>
              We strive to foster the best relationships
              with our clients.
            </h3>
          </hgroup>
          <TestimonialSlider />
        </div>
      </section>

      {/* Footer */}
      <div className='border-bar-reverse'></div>
      <footer className='container-fluid'>
        <div className='container'>
          <small>
              Contact us: {" "}
              <a href="mailto:info@vindhyadatascience.com">
                info@vindhyadatascience.com
              </a>
            </small>
          <p>
            <small>
              Copyright &copy; 2021-{new Date().getFullYear()} {" "}
              Vindhya Data Science, Inc. {" "}
              All Rights Reserved
            </small>
          </p>
          <img src={whiteLogo} style={{ maxWidth: "125px" }} alt="Vindhya logo"></img>
        </div>
      </footer>

    </>
  )
}

export default App
