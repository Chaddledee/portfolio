import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      smallScreen: !window.matchMedia("(min-width:420px)").matches,
      navItems: [
        {'name': 'home',
          'link': '/'},
        {'name': 'about me',
          'link': '/about'},
        {'name': 'projects',
          'link': '/projects'},
        {'name': 'photography',
          'link': '/photos'}
      ],
      current: 'menu',
      isOpen: false
     };

    this.handleClick = this.handleClick.bind(this);
    this.clickMenu = this.clickMenu.bind(this);
  }

  componentDidMount() {
    const handler = e => this.setState({smallScreen: !e.matches});
    window.matchMedia("(min-width:420px)").addListener(handler);
  }

  componentDidUpdate() {
    this.props.updateRotation();
  }

  handleClick() {
    this.setState({ isOpen: true });
  }

  clickMenu(page) {
    console.log('click');
    this.setState({ current: page });
    this.setState({ isOpen: false });
  }

  render() {
    let that = this;
    if (this.state.smallScreen) {
      return (
        <nav className='page-nav'>
          <h3 onClick={this.handleClick}>{this.state.current}</h3>
          {
            this.state.isOpen && (
              <ul>
                {
                  this.state.navItems.map(function(item, i){
                    return (
                      <li
                        key={i}
                        onClick={() => that.clickMenu(item.name)}
                        className='nav-item'
                      >
                        <Link
                          to={item.link}
                        >
                          {item.name}
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            )
          }
        </nav>
      )
    }
    else {
      return (
        <nav className='page-nav'>
          <ul>
            { 
              this.state.navItems.map(function(item, i){
                return (  
                  <li 
                    key={i}
                    onClick={() => that.clickMenu(item.name)}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                );
              }) 
            }
          </ul>
        </nav>
      )
    }
  }
}

export default Nav;