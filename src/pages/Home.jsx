import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import './Home.css';


class Home extends Component {
    render() {
        return (
          <div>
              <Navbar/>
              <div className="container home-wrapper home-main inner">
                  HI, I'm
                  {/*<a className={"intro-link"} href={"/about"}>Sagi Gleizer</a>*/}
                  <a href={"/about"} className="hover-shadow intro-link hover-color"> <span>S</span><span>a</span><span>g</span><span>i</span></a>.
                  and I create
                  <a className={"intro-link intro-link hover-color"}  href={"/portfolio"}> <span>software & functional web applications</span></a>.
              </div>
          </div>
        );
    }
}

export default Home;