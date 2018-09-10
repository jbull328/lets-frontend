import React, { Component } from 'react';
import userSample from '../images/userSample.png';

class About extends Component {
    render() {
        return(
            <div className="About topSection">
                <h2>About</h2>
                <p>This is what we want to do and we want you to check it out.</p>
                <div className="section">
                    <h3>Here is how we help you learn.</h3>
                    <img className="sectionImage" src={ userSample } />
                    <p>We have built an api for you to use to build your sample Front End app.
                        We will walk you through using the latest frameworks like React, Vue, and Vanilla.js.
                        This expeirence is going to help get you to the next level, 
                        and we will host your example so you can easily get it infront of the right people.
                    </p>

                </div>
            </div>
        );
    }
}

export default About;