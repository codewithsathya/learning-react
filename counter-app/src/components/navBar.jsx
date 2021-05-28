import React, { Component } from 'react';

class NavBar extends Component {
  render() { 
    return ( 
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand p-4">
          Navbar <span className="badge bg-secondary">{this.props.counters.filter(m => m.value > 0).length}</span>
        </a>
      </nav>
     );
  }
}
 
export default NavBar;