import React, { Component } from 'react';
import Auth from './Auth';

const auth = new Auth();
    auth.login()

class Projects extends Component {
    ;
    render() {
        return(
            <div className="topSection">
                <h2>Projects</h2>
                <p>This will be some text about what we want to do!</p>
            </div>
        );
    }
}

export default Projects;