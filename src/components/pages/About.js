import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import Header from './../Common/Header'
import Timeline from './../Common/Timeline';
import Team from './../Common/Team'
import image from './../assets/img/about.jpg'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Header 
                    title="About Us"
                    subtitle="It's really a great story"
                    showButton={false}
                    image={image}
                />
                
                <Timeline />
                <Team />
            </div>
            
        );
    }
}
 
export default About;