import React, { Component } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.getPath(),
        }
    }

    getPath = () => {
        var path = window.location.href;
        var currentTab = path.split('#')[1];
        if (currentTab === "/") currentTab = "/about";
        return currentTab;
    }


    highlight = (name) => {
        this.setState({
            selectedTab: name,
        });
    }

    createLinks = () => {
        const links = [
            {
                "name": "about me",
                "path": "/about"
            },
            {
                "name": "my work",
                "path": "/projects"
            },
            {
                "name": "contact me",
                "path": "/contact"
            }
        ]

        return links.map(link => {
            console.log(link.name);
            console.log(this.state.selectedTab);
            if (link.path === this.state.selectedTab) {
                return (
                    <Link className="sidebar-link selected" to={link.path} onClick={() => { this.highlight(link.path)}}>{link.name}</Link>
                );
            } 
            return (
                <Link className="sidebar-link" to={link.path} onClick={() => { this.highlight(link.path)}}>{link.name}</Link>
            );
        });
    }

    componentDidMount() {
        console.log('in componentDidMount');
    }

    render() {
        console.log('in render');
        console.log(this.state);
        return (
            <div className="SideBar">
                { this.createLinks() }
            </div>
        );
    }
}

export default SideBar;