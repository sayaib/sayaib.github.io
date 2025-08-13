import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h5 className="section-subtitle">The Skills I Have</h5>
          <h2 className="section-title">Technical Expertise</h2>
          <div className="title-underline"></div>
        </div>

        <div className="experience__container">
          <div className="experience__frontend">
            <h3>Full-Stack Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML5 & CSS3</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript (ES6+)</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React.js</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Node.js</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Express.js</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Next.js</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>TypeScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Firebase</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Redux</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>SASS/SCSS</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Tailwind CSS</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Flutter</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Responsive Design</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Vite.js</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
