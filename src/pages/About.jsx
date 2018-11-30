import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import './About.css';

class About extends Component {
    render() {
        return (
          <div>
              <Navbar/>
              <div className="">

                  {/*Work Experience*/}
                  <section id="work" className="work">
                      <div className="content-wrap">
                          <h2>Work Experience</h2>

                          {/*Job 1*/}
                          <div className="col-narrow">
                              <h3>Full Stack Developer</h3>
                              <p className="uppercase">TestCraft – Codeless Selenium</p>
                              <p>Feb 2018 - Present</p>
                          </div>

                          <div className="col-wide job-description">
                              <p>As a FullStack developer in the R&D department in a startup company, I had the opportunity to participate and contribute in a demanding and high stress product development and maintenance. </p>
                              <p>Main activity:</p>
                              <ul>
                                  <li>Developing and maintains using: AngularJS, NodeJS, Express.js, MongoDB, Batch, Docker, protractor</li>
                                  <li>Worked in Linux and Virtual Machines environment.</li>
                                  <li>Agile work environment, Jira is our friend.</li>
                              </ul>
                              <p>See more code example at <a href="https://github.com/sagiGL" target="_blank" rel="noopener noreferrer">github.com/sagiGL</a></p>
                          </div>

                          {/*Job 2*/}
                          <div className="col-narrow">
                              <h3>Product Developer</h3>
                              <p className="uppercase">Independent</p>
                              <p>Jan 2014 - Present</p>
                          </div>

                          <div className="col-wide job-description">
                              <p>Developing products from scratch after thinking on a solution for a problem or need.</p>
                              <p>Main activity:</p>
                              <ul>
                                  <li>Building system management applications with data bases, mostly in C# .NET and Java and JS.</li>
                                  <li>Mobile and PC games development using unity and android studio.</li>
                                  <li>Creating products and gadgets in fields such as chemistry and electronics.</li>
                              </ul>
                          </div>

                          {/*Job 3*/}
                          <div className="col-narrow">
                              <h3>Robotic Teacher</h3>
                              <p className="uppercase">RoboFun</p>
                              <p>Mar 2013 - Apr 2014</p>
                          </div>
                          <div className="col-wide job-description">
                              <p>Teaching robotics and basic coding to children and teens from different ages and Social environment.</p>

                              <p>Key contributions:</p>
                              <ul>
                                  <li>Teaching robotics class in schools and extra curriculum lessons for teams.</li>
                                  <li>While creating new lessons plans which fit to each group in class.</li>
                              </ul>
                              <p>See my complete work history on <a href="https://www.linkedin.com/in/sagi-gleizer-24571a87/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
                          </div>
                      </div>
                  </section>

                  {/*Education*/}
                  <section id="education" className="education">
                      <div className="content-wrap">
                          <h2>Education</h2>
                          <div className="col-narrow">
                              <h3>Interdisciplinary Center Herzliya, Israel</h3>
                              <p>Bachelor of Science, 2014-2018</p>
                              <p>Computer Science with a major at business.</p>
                          </div>
                          <div className="col-wide education-description">
                              <p>BSc Computer Science with specialization in business and other practical courses:</p>
                              <ul>
                                  <li>System developing based on Java, C# .NET with object oriented programming.</li>
                                  <li>Machine Learning programming.</li>
                                  <li>App developing (PC/ WEB/ Mobile).</li>
                                  <li>Business Major.</li>
                              </ul>
                              <p>See more code example at <a href="https://github.com/sagiGL" target="_blank" rel="noopener noreferrer">github.com/sagiGL</a></p>
                          </div>

                          <div className="col-narrow">
                              <h3>Doctor Google, Lynda.com, Coursera and freinds</h3>
                              <p>may 1991(not really) - present</p>

                          </div>
                          <div className="col-wide education-description">
                              <p>I'm a self-learner person, sometimes I watched interesting presentation on TED talks and just decided to take online course to get a deeper understanding. for example <a href="https://www.ted.com/talks/catarina_mota_play_with_smart_materials?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare">
                                  TED talk about smart materials</a> by Catarina Mota which gave me tons of ideas for new products such as the <a href="https://www.youtube.com/watch?v=oP3CllvWSx8">TestGum</a> and StickTon which were I did a lot of research on and gained a lot of experience.
                              </p>
                              <p>Few of the web courses I took during the years (difficult to find them all):</p>
                              <ul>
                                  <li><a href="https://www.lynda.com/learning-paths/Web/become-a-web-developer">Web Developer learning path</a> for essential training on HTML, CSS, JavaScript and more.</li>
                                  <li>A Brief History of Humankind course of Yuval noah arari Hebrew university online videos</li>
                                  <li>Smart materials and structures course At <a href="https://www.edx.org/" >edX</a></li>
                                  <li>Unity3D game developer learning path at lynda.com</li>
                                  <li>currently learning <a href="https://www.lynda.com/learning-paths/Web/become-a-react-developer">Become a React Developer</a>.</li>
                              </ul>
                              <p>See more code example at <a href="https://github.com/sagiGL" target="_blank" rel="noopener noreferrer">github.com/sagiGL</a></p>
                          </div>
                      </div>
                  </section>

                  {/*Army serice*/}
                  <section id="army" className="army">
                      <div className="content-wrap">
                          <h2>Army Service</h2>

                          {/*Profession*/}
                          <div className="col-narrow">
                              <h3>Search and Rescue Fighters Squads</h3>
                              <p className="uppercase">IDF</p>
                              <p> Nov 2009 - Nov 2012</p>
                          </div>

                          <div className="col-wide job-description">
                              <p>Huge life experience which helped me to know myself better and shape my character while
                                  giving back a little to the county.</p>

                              <ul>
                                  <li>Search and rescue fighter, Class Commander</li>
                                  <li>Commander in Commanders' School.</li>
                                  <li>Recuits Commander.</li>
                              </ul>
                          </div>
                      </div>
                  </section>
              </div>
          </div>
        );
    }
}

export default About;