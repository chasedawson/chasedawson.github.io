import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectLink extends Component {
    render() {
        return (
            <Link className="ProjectLink" to={this.props.data.path}>
                <h4 className="name">{this.props.data.name}</h4>
                <p className="desc">{this.props.data.short_desc}</p>
            </Link>

        );
    }
}

export default ProjectLink;