import React, { Component } from 'react';
import "./Contact.css";
import Navbar from '../components/Navbar.jsx';

class Contact extends Component {
    render() {
        return (
          <div>
              <Navbar/>
              <div className="content-wrap">
                  <h3 className="text-center">Don't mail me, just call</h3><br/>
                  <div className="row">
                      <div className="col-md-8">
                          <form action="/post" method="post">
                              <input className="form-control" name="name" placeholder="Name..."/><br/>
                              <input className="form-control" name="phone" placeholder="Phone..."/><br/>
                              <input className="form-control" name="email" placeholder="E-mail..."/><br/>
                              <textarea className="form-control button-pusher" name="text" placeholder="How can we help you?"></textarea><input className="btn btn-primary" type="submit" value="Send"/><br/><br/>
                          </form>
                      </div>
                      <div className="col-md-4">
                          <b>Sagi Gleizer</b> <br/>
                          Phone: 054-6676965<br/>
                          E-mail: <a href="mailto:sagigleizer@gmail.com">sagigleizer@gmail.com</a><br/>
                          <a href="https://www.linkedin.com/in/sagi-gleizer-24571a87/" className="fa fa-linkedin fa-contact"> </a>
                          <a href="https://www.facebook.com/sagi.gleizer" className="fa fa-facebook fa-contact"> </a>
                          <a href="https://www.github.com/sagiGL" className="fa fa-github fa-contact"> </a>
                          <br/><br/>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default Contact;