import  React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
          <div className="jumbotron jumbotron-fluid">
               <div className="content-wrap">
                   <img className="profile" alt=" "></img>
                   <h1 className="display-4">Sagi Gleizer</h1>
                   <h2>Program & Product developer</h2>
                   <a href="https://drive.google.com/file/d/1ZWr4ynsUolZZC9lDcW7D4w4wYRE0bcmN/view" download={"Sagi Gleizer CV ENG"} className="btn download">Download PDF</a>
               </div>
          </div>
        );
    }
}

export default Jumbotron;