import jdImg from '../assets/image/jd-circle-sm.png';
import jdSkills from '../assets/image/jd-skills.png';

import { useRef, useEffect } from 'react';

const AboutMe = ({ scrollToCreateSection }) => {
    const endOfPage = useRef(null);

    const scrollToBottom = () => {
        endOfPage.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        if (scrollToCreateSection) {
            scrollToBottom();
        }
    });

    return (
        <main className="content-about">
            <section className="content-about-section content-about-subhero-section">
                <div className="content-about-subhero-texts">
                    <h1>Design sentient, code cultured</h1>
                    <h2>I'm John Daniel, a driven web developer harnessing the power of both design and code to create new experiences.</h2>
                </div>
                <div className="content-about-subhero-img">
                    <img src={jdImg} alt="" />
                </div>
            </section>
            <section className="content-about-section content-about-more-section">
                <h3>A Short Story</h3>
                <div className="content-about-more-texts">
                    <div className="content-about-more-text">
                        My fascination for Metro and Material Design is what mostly kick-offed my quest for all things design and technology. From attending Polytechnic University of the Philippines, to taking freelance work, until working with wonderful people, as a web developer at RareJob Philippines, providing enriching digital teaching experience.
                    </div>
                    <div className="content-about-more-text">
                        In any design enthralls me; be it on a motion graphic video or a website, I always wondered how they were made, and how am I able to do such someday. This has become my drive to take on new experiences and gain new knowledge, so that I may able to help create new wonderful things, and share what I learned to those who also aspires to create.
                    </div>
                </div>
            </section>
            <section className="content-about-section content-about-skills">
                <div className="content-about-skills-content">
                    <div className="content-about-skills-texts">
                        <h3>Current Skills</h3>
                        <div className="content-about-skills-text">
                            Working as a full stack web developer in my current job, I experienced and learned a wide array of skills, from creating and maintaining databases, working with frameworks for both back-end and front-end, dealing with cloud-based servers, maintaining efficiency and accessibility of our web applications, to project management and the art of collaboration.
                        </div>
                        <div className="content-about-skills-text">
                            Outside my work, my curiosity-driven journey has opened my senses to more domains such as no-code development, advanced web styling, user-driven creation of user interfaces and experiences, branding, graphic design, and animations to name a few.
                        </div>
                    </div>
                    <div className="content-about-subhero-img">
                        <img src={jdSkills} alt="" />
                    </div>
                </div>
            </section>
            <section className="content-about-section content-about-connect">
                <h1>Let's create!</h1>
                <p>You can reach me out or see more information through the following mediums:</p>
                <div id="create" className="content-about-connect-buttons">
                    <a href="https://linkedin.com/in/john-daniel-camontoy" target="_blank" className="connect-btn">
                        <div className="connect-btn-details">
                            <p className="connect-btn-details-title"><i className="fa-brands fa-linkedin"></i>LinkedIn</p>
                            <p className="connect-btn-details-handle">/in/john-daniel-camontoy/</p>
                        </div>
                    </a>
                    <a href="mailto:johndaniel.camontoy@gmail.com" target="_blank" className="connect-btn">
                        <div className="connect-btn-details">
                            <p className="connect-btn-details-title"><i className="fa-solid fa-envelope"></i>E-mail</p>
                            <p className="connect-btn-details-handle">johndaniel.camontoy@gmail.com</p>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1R7_QrPsuQ7KeeZjzUs13F6QbZzonTn9v/view?usp=sharing" target="_blank" className="connect-btn">
                        <div className="connect-btn-details">
                            <p className="connect-btn-details-title"><i className="fa-solid fa-file-lines"></i>Resume</p>
                            <p className="connect-btn-details-handle">See it though GDrive</p>
                        </div>
                    </a>
                </div>
            </section>
            <div ref={endOfPage}></div>
        </main>
    );
}

export default AboutMe;