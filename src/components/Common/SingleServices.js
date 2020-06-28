import React, { Component } from 'react';

class SingleServices extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className={`fas ${this.props.icon} fa-stack-1x fa-inverse`}></i>
                </span>
                <h4 className="my-3">{this.props.title}</h4>
                <p className="text-muted">{this.props.description}</p>
            </div>
         );
    }
}
 
export default SingleServices;