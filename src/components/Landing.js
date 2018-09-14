import React, { Component } from 'react';
import userSample from '../images/userSample.png';
 
class Landing extends Component {
    render() {
        return(
            <div className="Landing topSection">
                <h2>Welcome to Let's Frontend!</h2>
                <p>At Let's Front End we are as excited about programming as you are.
                   We love building things and we want to see a more inclusive future in tech. 
                   Over the years Front-End Web Development has changed a lot and keeping our
                    skills fresh is crucial to staying relevant with today's hottest company's. 
                    We want to help fill the need for more intermediate learning content. 
                    Here's what we are planning, a UI focussed medium to practice your skills. 
                    There are so many great ways to practice algorithms, DataStructures, Programming Language Syntax. 
                    All of those things are important for sure, but we want to offer practice on UI elements where you are likely to get your first developer job.</p>
                
                
                    <p>We are currently working hard at getting this going as quickly as 
                    possible, if you want to help please consider filling out the short survey, 
                    your input will help us build a product that you 
                    and your fellow community want to use.</p>

                    <a  className="surveyLink" href="https://docs.google.com/forms/d/e/1FAIpQLSfekqgX1pzV4Cd9D8r2KsPX2n8CnGjI4mOJSJmpmziczHn_Hw/viewform?usp=sf_link">Help Us by filling out our survey.</a>
            </div>
        );
    }
}

export default Landing;