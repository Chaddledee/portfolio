import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { render } from "react-dom";

import './App.css';

import Header from './Header/Header.js';
import Nav from './Nav/Nav.js';
import About from './About/About.js';
import Photos from './Photos/Photos.js';
import Album from './Photos/Album/Album.js';
import Photo from './Photos/Photo/Photo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      huerotation: 0,
      saturation: 60,
      pathname: ''
    };

    this.updateRotation = this.updateRotation.bind(this);
  }

  updateRotation() {
    if (window.location.pathname !== this.state.pathname) {
      console.log('route changed')
      this.setState({pathname: window.location.pathname});
      switch(window.location.pathname) {
        case('/'):
          this.setState({huerotation: 0});
          this.setState({saturation: 75});
          break;
        case('/about'):
          this.setState({huerotation: 90});
          this.setState({saturation: 55});
          break;
        case('/projects'):
          this.setState({huerotation: 180});
          this.setState({saturation: 55});
          break;
        case('/photos'):
          this.setState({huerotation: 270});
          this.setState({saturation: 55});
          break;
      }
    }
  }

  componentDidMount() {
    this.updateRotation();
  }

  render() {
    return (
      <div>
        <Router>
        <div id="bg-image" style={{filter: 'contrast(90%) brightness(90%) saturate(' + this.state.saturation + '%) hue-rotate(' + this.state.huerotation + 'deg)'}}></div>
        <div>
          <Header updateRotation={this.updateRotation}/>

          <div id='content'>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/projects">
                <Projects/>
              </Route>
              <Route path="/photos/:album_id/:image_id"  component={Photo} />
              <Route path="/photos/:album_id"  component={Album} />
              <Route path="/photos">
                <Photos/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
        </Router>
      </div>
    );
  }
}

function Home() {
  return <h3>Home</h3>;
}

function Projects() {
  return <h3>Projects</h3>;
}

export default App;

const container = document.getElementById("app");
render(<App />, container);