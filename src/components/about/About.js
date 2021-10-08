import React, { Component } from 'react';
import "./About.css";

class About extends Component {
    render() {
        return (
            <div className="About in-content">
                <p className="hello">
                    hi, i'm chase :)
                </p>
                <div className="self-intro">
                    <p>
                        I use data to tell stories! I'm passionate about all things data: science, visualization, and storytelling. I really enjoy thinking about how people interact with technology.
                    </p>

                    <p>I'm in my third and final undergraduate year at UVA with expected B.A. in Computer Science in 2022.</p>

                    <p>
                        I just took a gap year, during which I worked for the UVA Biocomplexity Institute, so I'm easing back into life as a university student. I am really grateful for the gap year--it allowed me to 
                        soldify my interests and think more about what I want to do post-grad. Right now, I work as a Data Fellow for the UVA Equity Center, where I'm contributing to a 
                        climate equity project for Charlottesville and the Eastern Shore. We're currently preparing for a community exhibit in Charlottesville that 
                        will feature art, data visualization, and youth storytelling all related to climate change!
                    </p>
                    <p>
                        Thanks for visiting my site! Use the sidebar to the left to contact me or peruse some of the cool things that I have done or am doing.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;