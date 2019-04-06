import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import "./Portfolio.css";

class Portfolio extends Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    render() {
        return (
          <div>
              <Navbar/>
              <div className="container">
                  <div className="row">
                      <div className="col-3">
                          <div className="list-group" id="list-tab" role="tablist">

                              <a className="list-group-item list-group-item-action eigth before after warpper" id="list-resume-web-site"
                                 data-toggle="list" href="#resume-web-site" role="tab" aria-controls="resume-web-site">Resume Web Site</a>

                              <a className="list-group-item list-group-item-action eigth before after warpper" id="list-resume-web-site"
                                 data-toggle="list" href="#old-resume-web-site" role="tab" aria-controls="old-resume-web-site">Old Resume Web Site</a>

                              <a className="list-group-item list-group-item-action eigth before afterwarpper" id="list-tinbak"
                                 data-toggle="list" href="#tinbark" role="tab" aria-controls="tinbark">Tinbak</a>

                              <a className="list-group-item list-group-item-action eigth before after warpper" id="list-crud-personal-webapp"
                                 data-toggle="list" href="#crud-personal-webapp" role="tab" aria-controls="crud-personal-webapp">crud personal</a>

                              <a className="list-group-item list-group-item-action eigth before after warpper" id="list-react-sticky-notes"
                                 data-toggle="list" href="#react-sticky-notes" role="tab" aria-controls="react-sticky-notes">react sticky notes</a>

                              <a className="list-group-item list-group-item-action eigth before after warpper" id="list-web-list"
                                 data-toggle="list" href="#web-list" role="tab" aria-controls="web-list">Web List</a>

                              <a className="list-group-item list-group-item-action eigth before after warpper" id="list-login-page"
                                 data-toggle="list" href="#login-page" role="tab" aria-controls="login-page">Login & Register</a>

                              <a className="list-group-item list-group-item-action eigth before after warpper" id="list-garage-manager"
                                 data-toggle="list" href="#garage-manager" role="tab" aria-controls="home">Garage Manager</a>

                              <a className="list-group-item list-group-item-action eigth before after warpper" id="list-4-in-a-row"
                                 data-toggle="list" href="#4-in-a-row" role="tab" aria-controls="4-in-a-row">4 In A Row</a>

                              <a className="list-group-item list-group-item-action eigth before after warpper" id="list-hanuka-playlist"
                                 data-toggle="list" href="#hanuka-playlist" role="tab" aria-controls="hanuka-playlist">Hanuka Playlist Finder</a>

                              <a className="list-group-item list-group-item-action eigth before after warpper" id="list-fun-art"
                                 data-toggle="list" href="#fun-art" role="tab" aria-controls="fun-art">Fun Art drawings</a>
                          </div>
                      </div>
                      <div className="col-8">
                          <div className="tab-content" id="nav-tabContent">

                              <div className="tab-pane fade show active" id="resume-web-site" role="tabpanel" aria-labelledby="resume-web-site">
                                  <a href="https://github.com/sagiGL/react-resume-site" ><h2>Resume Web Site <div className="fa fa-github"> </div></h2></a>
                                  <p>A simple React single page website used for resume. it has some functionality but most of it is Keep It Simple.</p>
                                  <img src="https://i.imgur.com/HnzMcYE.jpg" className="rounded mx-auto d-block img-fluid" alt="Responsive"/>
                              </div>

                              <div className="tab-pane fade" id="old-resume-web-site" role="tabpanel" aria-labelledby="old-resume-web-site">
                                  <a href="https://github.com/sagiGL/ResumeSite" ><h2>Old Resume Web Site <div className="fa fa-github"> </div></h2></a>
                                  <p>A pure HTML & CSS webpage for 1 page resume site</p>
                                  <img src="https://i.imgur.com/hj0GjyE.png" className="rounded mx-auto d-block img-fluid" alt="Responsive"/>
                              </div>

                              <div className="tab-pane fade" id="tinbark" role="tabpanel" aria-labelledby="tinbark">
                                  <a href="https://github.com/sagiGL/Tinbark" ><h2>Tinbak - Pet Adoption Web/mobile Application<div  className="fa fa-github"> </div></h2></a>
                                  <p>A React Web/Mobile Application for pet adoption</p>
                                  <img src="https://i.imgur.com/yPQKGTf.jpg" className="rounded mx-auto d-block img-fluid" alt="Responsive"/>
                              </div>

                              <div className="tab-pane fade" id="crud-personal-webapp" role="tabpanel" aria-labelledby="crud-personal-webapp">
                                  <a href="https://github.com/sagiGL/crud_PersonalTable" ><h2>CRUD Functionality Web App <div className="fa fa-github"> </div></h2></a>
                                  <p>A simple and pure JavaScript implementation for CRUD application</p>
                                  <img src="https://i.imgur.com/xPIrqQN.png" className="rounded mx-auto d-block img-fluid" alt="Responsive"/>
                              </div>

                              <div className="tab-pane fade" id="react-sticky-notes" role="tabpanel" aria-labelledby="react-sticky-notes">
                                  <a href="https://github.com/sagiGL/react-stick-notes" ><h2>Sticky notes with React <div className="fa fa-github"> </div></h2></a>
                                  <p>A simple React implementation for Sticky Notes </p>
                                  <img src="https://i.imgur.com/guSlVYb.png" className="rounded mx-auto d-block img-fluid" alt="Responsive"/>
                              </div>

                              <div className="tab-pane fade" id="web-list" role="tabpanel" aria-labelledby="web-list">
                                  <a href="https://github.com/sagiGL/WebList" ><h2>Web List <div className="fa fa-github"> </div></h2></a>
                                  <p>Simple to do list with sort functionality</p>
                                  <img src="https://i.imgur.com/jD0xOLZ.png" className="rounded mx-auto d-block img-fluid" alt="Responsive"/>
                              </div>

                              <div className="tab-pane fade" id="login-page" role="tabpanel" aria-labelledby="login-page">
                                  <a href="https://github.com/sagiGL/loginTrialAngularJS" ><h2>Angular + FireBase DB Register & Auth <div className="fa fa-github"> </div></h2></a>
                                  <p>A simple login page with register option  with server authentication using good FireBase database </p>
                                  <img src="https://i.imgur.com/Fn9rCCO.jpg" className="rounded mx-auto d-block img-fluid" alt="Responsive"/>
                              </div>

                              <div className="tab-pane fade" id="garage-manager" role="tabpanel" aria-labelledby="garage-manager">
                                  <a href="https://github.com/sagiGL/GarageManger" ><h2>Garage Manger <div className="fa fa-github"> </div></h2></a>
                                  <p>A simple garage manager automate system for easy register new vehicles and maintains over them</p>
                              </div>

                              <div className="tab-pane fade" id="4-in-a-row" role="tabpanel" aria-labelledby="4-in-a-row">
                                  <a href="https://github.com/sagiGL/GarageManger" ><h2>4 In A Row <div className="fa fa-github"> </div></h2></a>
                                  <p>The old game we all know in a C# windowsform UI with Player Vs Player / Player Vs Computer Mode.</p>
                              </div>

                              <div className="tab-pane fade" id="hanuka-playlist" role="tabpanel" aria-labelledby="hanuka-playlist">
                                  <a href="https://github.com/sagiGL/Hiposoft_HanukaSong" ><h2>Hanuka Song Playlist <div  className="fa fa-github"> </div></h2></a>
                                  <p>A .NET C# MVC project which is a music songs playlist with search bar and adding data functionality.</p>
                                      <img src="https://i.imgur.com/GWOMcOM.jpg" className="rounded mx-auto d-block img-fluid" alt="Responsive"/>

                              </div>

                              <div className="tab-pane fade" id="fun-art" role="tabpanel" aria-labelledby="fun-art">
                                  <Gallery photos={ART_GAL} columns={3} margin={4} onClick={this.openLightbox}/>
                                  <Lightbox images={ART_GAL}
                                            onClose={this.closeLightbox}
                                            onClickPrev={this.gotoPrevious}
                                            onClickNext={this.gotoNext}
                                            currentImage={this.state.currentImage}
                                            isOpen={this.state.lightboxIsOpen}
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
          </div>
        );
    }
}

const ART_GAL = [
    {
        src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/d18def16-113a-4eb6-b9ac-0a7a6ae5bd12/d5ju41v-b3864414-707a-4f8f-b246-9787126c7437.jpg/v1/fill/w_900,h_1305,q_70,strp/for_fun_3_years_in_the_army__by_bananabong_d5ju41v-fullview.jpg',
        width: 1,
        height: 1.5
    },
    {

        src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/d18def16-113a-4eb6-b9ac-0a7a6ae5bd12/d5ju40n-e5b2dd83-abd9-4176-abec-3b480c028cc3.jpg/v1/fill/w_900,h_655,q_70,strp/for_fun_3_years_in_the_army__by_bananabong_d5ju40n-fullview.jpg',
        width: 2,
        height: 1.5
    },
    {
        src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/d18def16-113a-4eb6-b9ac-0a7a6ae5bd12/d5juct0-d0afacd6-0d43-4002-bf91-770fbeb6f5aa.jpg/v1/fill/w_900,h_1282,q_70,strp/for_fun_3_years_in_the_army__by_bananabong_d5juct0-fullview.jpg',
        width: 1,
        height: 1.5
    },
    {
        src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/d18def16-113a-4eb6-b9ac-0a7a6ae5bd12/d5ju446-dcc25d1c-471b-46ca-8321-4211b2611d5d.jpg/v1/fill/w_900,h_655,q_70,strp/for_fun_3_years_in_the_army__by_bananabong_d5ju446-fullview.jpg',
        width: 2,
        height: 1.5
    },
    {
        src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/d18def16-113a-4eb6-b9ac-0a7a6ae5bd12/d5jucs4-4a54efaf-4d72-47ec-a122-a477d39e0306.jpg/v1/fill/w_749,h_1067,q_70,strp/for_fun_3_years_in_the_army__by_bananabong_d5jucs4-pre.jpg',
        width: 1,
        height: 1.5
    },
    {
        src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/d18def16-113a-4eb6-b9ac-0a7a6ae5bd12/d5ju4oe-345acd0a-b86e-4dfc-b3e0-a8dfc75dc968.jpg/v1/fill/w_900,h_1305,q_70,strp/for_fun_3_years_in_the_army__by_bananabong_d5ju4oe-fullview.jpg',
        width: 1,
        height: 1.5
    }
];


export default Portfolio;
