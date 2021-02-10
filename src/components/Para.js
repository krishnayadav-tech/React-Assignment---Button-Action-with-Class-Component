import React from 'react';


class Button extends React.Component{

    constructor(props){
        super(props);
        this.text = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
    }
    render(){
        return (
            <p id="para">{this.text}</p>
        )
    }
}

export default Button;
