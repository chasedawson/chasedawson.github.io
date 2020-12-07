import React, { Component } from 'react';
import ProjectLink from './ProjectLink';
import projects from './projects.json';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import './Projects.css';


class Projects extends Component {

    render() {
        console.log(projects);
        return (
            <div className="Projects">
                <p className="page-title">my work</p>
                <div className="projects-container">
                    {
                        projects.map(project => {
                            return (
                            <ProjectLink data={project} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Projects;