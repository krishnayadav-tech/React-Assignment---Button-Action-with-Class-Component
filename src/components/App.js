import React, {Component, useState} from "react";
import '../styles/App.css';
import Button from './Button';
import Para from './Para'
class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			show : false
		}
	};

	
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				{this.state.show ? <Para/> : null}
				<Button clicked={()=>{this.setState({show:true})}} />
    		</div>
    	);
    }
}


export default App;

