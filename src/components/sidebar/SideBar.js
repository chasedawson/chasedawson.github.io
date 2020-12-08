import React, { Component } from 'react';
import './SideBar.css';
import history from '../../history';
import { Link } from 'react-router-dom';

class SideBar extends Component {

    route = (path) => {
        console.log(path);
        console.log(history);
        history.push(path);
    }

    render() {
        return (
            <div className="SideBar">
                <Link className="sidebar-link" to="/portfolio/about">about me</Link>
                <Link className="sidebar-link" to="/portfolio/projects">my work</Link>
                <Link className="sidebar-link" to="/portfolio/contact">contact me</Link>
            </div>
        );
    }
}

export default SideBar;