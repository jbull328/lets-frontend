import React, { Component } from 'react';
import userSample from '../images/userSample.png';
import Fund from './Fund';
 
class Landing extends Component {
    render() {
        return(
            <div className="Landing">
                <h2>Welcome to Let's Frontend!</h2>
                <p>This will be some text about what we want to do!</p>
                <button>Sign Up</button>
                <button>Donate</button>
                <div className="section">
                    <h3>Why learn to work with data?</h3>
                    <img className="sectionImage" src={ userSample }  />
                    <p>Some stuff about the problem...</p>
                </div>

                <Fund />
            </div>
        );
    }
}

export default Landing;