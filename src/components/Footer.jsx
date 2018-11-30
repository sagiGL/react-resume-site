import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">made by Sagi Gleizer 2018</span>
                    <a href="https://www.linkedin.com/in/sagi-gleizer-24571a87/" className="fa fa-linkedin"> </a>
                    <a href="https://www.facebook.com/sagi.gleizer" className="fa fa-facebook"> </a>
                    <a href="https://www.github.com/sagiGL" className="fa fa-github"> </a>
                </div>
            </footer>
        );
    }
}

export default Footer;