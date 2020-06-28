import React, { Component } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
import Header from './../Common/Header';
import image from './../assets/img/header-bg.jpg';

import Team from './../Common/Team';
import TeamMember from './../Common/TeamMember';
import Timeline from './../Common/Timeline';

// Re-usable components
import Services from './../Common/Services';
import Portofolio from './../Common/Portofolio';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header 
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />

                <Services />

                <Portofolio />

                <Timeline />

                <Team />
            </div>
         );
    }
}
 
export default Home;