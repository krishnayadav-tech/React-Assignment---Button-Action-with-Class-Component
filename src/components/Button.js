import React from 'react';


class Button extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            <button onClick={this.props.clicked} id="button">click</button>
        )
    }
}

export default Button;