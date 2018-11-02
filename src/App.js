import React, { Component } from 'react';
import Add from './components/Add';
import ResultList from './components/ResultList';
import './App.css';


class App extends Component {
  render() {
    return (
    	<div className="container">
    		
        	<Add/>
        	<ResultList/>

    	</div>
    );
  }
}

export default App;
