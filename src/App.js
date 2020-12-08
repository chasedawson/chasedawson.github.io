import { withRouter, Route } from 'react-router-dom';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import SideBar from './components/sidebar/SideBar';
import projects from './components/projects/projects.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="content">
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} /> 
        <Route exact path="/contact" component={Contact} />
        {
          projects.map(project => {
            return (
              <Route exact path={project.path}>
                <Project data={project} />
              </Route>
            );
          })
        }
      </div>
    </div>
  );
}

export default withRouter(App);
