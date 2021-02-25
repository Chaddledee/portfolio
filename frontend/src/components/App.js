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

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div id='content'>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/projects">
                <Projects data={this.state.data}/>
              </Route>
              <Route path="/photos">
                <Photos data={this.state.data}/>
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
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Projects(props) {
  return <h2>Projects</h2>;
}

function Photos() {
  return <h2>Photography</h2>
}

export default App;

const container = document.getElementById("app");
render(<App />, container);