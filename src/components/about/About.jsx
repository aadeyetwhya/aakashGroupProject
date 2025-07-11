import React from 'react'
import './About.css'

function About() {
    return (
        <section className="aboutUs" id="about">
            <div className="aboutUsContent">
                <h1 className="title">
                    About us
                </h1>
                <div className="aboutDescription">
                    <p>
                       Welcome to our React-based Single Page Application (SPA) project — a clean and modern landing page built to showcase essential front-end development skills using React, Vanilla CSS, and public API integration.
                    </p>
                    <p>
                        This project was developed as part of a front-end internship assignment, with the goal of demonstrating a solid understanding of modern web technologies. It highlights core concepts such as component-based architecture, single-page navigation, API communication, form handling, and dark mode implementation.
                    
                        Each section of the application — including the navigation header, image slider, about section, team showcase, contact form, and footer — has been carefully structured to create a consistent and user-friendly interface. The design follows a minimalist approach with attention to clarity, aesthetics, and functionality.
                        
                            To add dynamic functionality, we integrated a free public API from RapidAPI on a dedicated secondary page. This demonstrates the ability to fetch and present external data using React hooks, handle asynchronous operations, and display content in a meaningful way.
                        </p>
                        <p>
                            Overall, this project represents a hands-on application of front-end fundamentals and a commitment to writing clean, maintainable code. It reflects both creativity and technical discipline, making it a strong foundation for future real-world development work.
                        </p>
                        </div>
            </div>
        </section>

    )
}

export default About