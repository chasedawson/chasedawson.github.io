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
                        I use data to tell stories! I'm passionate about all things data: science, visualization, and storytelling. I also enjoy working on machine learning projects, 
                        and occasionally, find web development tolerable. 
                    </p>

                    <p>I'm a student at UVA with an expected B.A. in Computer Science in 2022 and M.S. in Data Science in 2023.</p>

                    <p>
                        Currently, I'm taking a gap year and working for the UVA Biocomplexity Institute, 
                        where I'm contributing to two projects. In the first, I'm building an experimental platform to determine how 
                        collective action is mediated through social media. In the second, I'm using text analysis and natural language 
                        processing techniques to understand race and gender relations in the United States military during World War II 
                        from a novel historical dataset consisting of 65,000 pages of free-form text and multiple choice responses from 
                        multiple conducted surveys.
                    </p> 

                    <p>
                        In addition to working during my gap year, I'm also participating in a fellowship through the Creator Institute, 
                        where I am writing a book that will be published in August 2021. The goal of my book, <span style={{"font-style": "italic"}}>Visualizing the Climate Crisis</span>,
                        is to provide a collection of data-driven visual stories interwoven with personal narratives and experiences from members of frontline communities, climate activists,
                        or generally people involved in the climate change. 
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