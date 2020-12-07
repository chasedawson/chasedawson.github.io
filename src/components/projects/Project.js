import React, { Component } from 'react';

function createMarkup(string) {
    console.log("createMarkup called");
    return {__html: string}
}

class Project extends Component {

    render() {
        return (
            <div className="Project">
                <p class="project-title">{this.props.data.name}</p>
                <div dangerouslySetInnerHTML={createMarkup(this.props.data.long_desc)} />
                <p class="project-link">Click <a href={this.props.data.link}>here</a> explore the project site!</p>
            </div>
        );
    }
}

export default Project;