import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';

class App extends Component {

  constructor(){
    super();
    this.state = {
      data: []
    };
  }

  //* fetching data from local server
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log(`player's data: ${response.data}`);
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(`error fetching data lol: ${error}`);
      })
  }

  //! main app
  render() {
    return (
      <div className = 'container'>
        <h1> ⚽️ Women's World Cup ⚽️ </h1>
        <Navbar />
      </div>
    );
  }

}

export default App;
