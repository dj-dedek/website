import React, { Component, Fragment } from 'react';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
            {this.props.elementName === 'input' ?
                <div className="form-group">
                    <input 
                        className="form-control" 
                        id={this.props.name}
                        type={this.props.type} 
                        placeholder={this.props.placeholder} 
                        required="required" 
                        data-validation-required-message="Please enter your name."
                        // value={this.state.name}
                        // onChange={e => this.setState({ name: e.target.value })}
                        value={this.props.value}
                        onChange={e => this.props.onChange(e)}
                    />
                </div>
                :
                <div className="form-group form-group-textarea">
                    <textarea 
                        className="form-control" 
                        id={this.props.name}
                        placeholder={this.props.placeholder}
                        required="required" 
                        data-validation-required-message="Please enter a message."
                        // value={this.state.message}
                        // onChange={e => this.setState({ message: e.target.value })}
                        value={this.props.value}
                        onChange={e => this.props.onChange(e)}
                    />
                </div>
                }
                <p className="help-block text-danger"></p>
            </Fragment>
         );
    }
}
 
export default Field;