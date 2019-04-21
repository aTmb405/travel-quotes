import React, { Component } from 'react';
import Navbar from "./Navbar";
import Quotes from "./Quotes";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import './QuotesApp.css';

library.add(faHashtag);
library.add(faRedoAlt);

class App extends Component {
  render() {
    return (
      <div className="App" id="quote-box">
        <Navbar />
        <Quotes />
      </div>
    );
  }
}

export default App;
