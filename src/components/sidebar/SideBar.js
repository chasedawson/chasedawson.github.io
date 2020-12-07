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
                <Link className="sidebar-link" to="/about">about me</Link>
                <Link className="sidebar-link" to="/projects">my work</Link>
                <Link className="sidebar-link" to="/contact">contact me</Link>
            </div>
        );
    }
}

export default SideBar;