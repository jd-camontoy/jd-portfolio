import './work1.scss';
import projectOverviewImg from './assets/work3/po-1.png';
import personaImg from './assets/work1/persona-1.png';
import userJourneyImg from './assets/work1/uj-1.png';
import paperWireframeImg from './assets/work3/pw-1.png';
import digitalWireframeImg1 from './assets/work3/dw-1.png';
import digitalWireframeImg2 from './assets/work3/dw-2.png';
import lofiProtoImg from './assets/work3/lfp-1.png';
import mockupImg1 from './assets/work3/mockups-1.png';
import mockupImg2 from './assets/work3/mockups-2.png';
import hifiProtoImg from './assets/work3/hfp-1.png';

const Work3 = () => {
    return (
        <main className="work1">
            <header className="work-title-section">
                <h1>AllScreen Website Design</h1>
                <h2>Case Study for Creating a Common Showtime Check-in Web Service</h2>
            </header>
            <section>
                <h2>Project Overview</h2>
                <div className="work-section work-section-col-2">
                    <div className="work-part-left">
                        <div className="work-part-text">
                            <h4>The Product</h4>
                            <p>AllScreen was conceptualized and envisioned as an alternative to theater-based booking websites and physical ticket purchase process, providing a more convenient and engaging way of enabling movie goers to see their favorite new movie releases.</p>
                        </div>
                        <div className="work-part-text">
                            <h4>Project duration</h4>
                            <p>
                                September 2022 - November 2022
                            </p>
                        </div>
                        <div className="work-part-fourths">
                            <div className="work-part-text">
                                <h4>The Problem</h4>
                                <p>Moviegoers need a more convenient and immediate way to see new movie releases in theaters</p>
                            </div>
                            <div className="work-part-text">
                                <h4>The Goal</h4>
                                <p>Design an website that enables moviegoers to get tickets to watch their favorite movies in just a few clicks.</p>
                            </div>
                            <div className="work-part-text">
                                <h4>Role</h4>
                                <p>Main UX designer, involved in all of the conducted product development processes and activities to materialize the product.</p>
                            </div>
                            <div className="work-part-text">
                                <h4>Responsibilities</h4>
                                <p>Usability study researcher and moderator, visual and interaction designer of both created wireframes and mockups.</p>
                            </div>
                        </div>
                    </div>
                    <div className="work-part-right">
                        <img src={projectOverviewImg} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <h2>Understanding the User</h2>
                <div className="work-section">
                    <div className="work-part-text">
                        <h4>User research: Summary</h4>
                        <ul>
                            <li>Conducted interviews with possible users, and created empathy maps from the gathered responses to further understand users’ preferences and points for assistance.</li>
                            <li>The primary user group confirmed are adults who had struggles with booking tickets to watch movies, both physically and through online services. This confirmed the assumptions about moviegoers wanting to see movies in an earlier manner but was not able to do so at times due to several factors such as vicinity and availability.</li>
                            <li>Other factors learned includes the importance of information regarding theater offerings and seat variation and accessibility options.</li>
                        </ul>
                    </div>
                    <div className="work-part-text">
                        <h4>User research: Pain points</h4>
                        <div className="work-part-col-3">
                            <div className="work-part-text">
                                <h4><span className="count inline">1</span>Diverse options from different services</h4>
                                <p>Users tend to use different services to determine the movie’s availability, preferred theater, and schedule to fit.</p>
                            </div>
                            <div className="work-part-text">
                                <h4><span className="count inline">2</span>Booking can take time</h4>
                                <p>The incoherent method of searching makes the user spend time, on top of slow processing times and a lack of diverse transaction options.</p>
                            </div>
                            <div className="work-part-text">
                                <h4><span className="count inline">3</span>Lack of information</h4>
                                <p>Users’ preferences are a huge factor in selecting a preferred movie experience. That is why deficient information at times can lead to users not to proceed with booking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Persona</h4>
                        <div className="work-center-img w-60 mb-20">
                            <img src={personaImg} alt="" />
                        </div>
                        <div className="work-part-text sub">
                            <h4>Problem statement</h4>
                            <p>Nishijo is an avid moviegoer who needs a convenient and efficient way to see his favorite new movie because he wants to be one of the first to see his highly anticipated movie release.</p>
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>User journey map</h4>
                        <p>Mapping and learning Nishijo’s user journey communicates the need for a common showtime check-in website to help users obtain movie tickets speedily.</p>
                        <div className="work-center-img w-60 mt-20">
                            <img src={userJourneyImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Starting the design</h2>
                <div className="work-section">
                    <div className="work-part-text">
                        <h4>Paper wireframes</h4>
                        <p>Upon conducting ideation activities, including doing a competitive audit and storyboarding, paper wireframes were created to reflect both the necessary screens the user will be familiar to interact with and to also materialize features that will make the website effective in helping the user efficiently to the transaction.</p>
                        <div className="work-center-img w-80 mt-20">
                            <img src={paperWireframeImg} alt="" />
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Digital wireframes</h4>
                        <div className="work-part-col-2 with-img">
                            <p>With the continuation of the wireframing phase, the initially created digital interface bear the ideal elements that was selected from the paper version, to come up with a cohesive interface.</p>
                            <img className="ml-20" src={digitalWireframeImg1} alt="" />
                        </div>
                        <div className="work-part-col-2 with-img">
                            <img className="mr-20" src={digitalWireframeImg2} alt="" />
                            <p>To materialize the goal of an efficient booking process, the screen for theater and schedule suggestions was created, integrating it with the main transaction flow.</p>
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Low-fidelity prototype</h4>
                        <p>Upon completing the necessary screens reflecting the overall flow of the website, a low-fidelity prototype was created, connecting the homepage to the suggestion, seat selection, payment confirmation, and ticket generation.</p>
                        <p>The prototype was then shared with the participants of the conducted usability study through this link, to gain new insights.</p>
                        <div className="work-center-img w-60 mt-20">
                            <img src={lofiProtoImg} alt="" />
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Usability study: findings</h4>
                        <p>Two rounds of usability studies were conducted, whereas insights from the first one were used to enhance the initially created wireframes toward their transition to mockups. Afterward, the insights from the second study aided in making the mockups more refined and polished.</p>
                        <div className="work-part-col-2 mt-20">
                            <div className="work-part-text">
                                <h4>ROUND 1</h4>
                                <ul>
                                    <li>Users found the suggestions helpful</li>
                                    <li>Missing information caused struggles in the user’s journey to the website</li>
                                    <li>Users have different assumptions and preferences that should be put into consideration</li>
                                </ul>
                            </div>
                            <div className="work-part-text">
                                <h4>ROUND 2</h4>
                                <ul>
                                    <li>Lack of screen for login and its integration to the flow</li>
                                    <li>Inclusion of search-based interface and user flow</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Refining the design</h2>
                <div className="work-section">
                    <div className="work-part-text">
                        <h4>Mockups</h4>
                        <div className="work-part-col-2 mb-20 with-img">
                            <p>Given the insights gained from the first conducted usability study, mockups were ensured to contain relevant information regarding available options, together with engaging visuals.</p>
                            <img className="mr-20" src={mockupImg1} alt="" />
                        </div>
                        <p>Upon receiving the insights from the second usability study, additional screens were added to reflect accurate user interaction and usage, including search and user authentication.</p>
                        <div className="work-center-img w-80 mt-20">
                            <img src={mockupImg2} alt="" />
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>High-fidelity prototype</h4>
                        <p>
                            The created high-fidelity prototype was ensured to have the remaining related screens that reflect the user journey through the website, from searching to confirming the movie, theater, and showtime, and finally, getting the ticket.<br/>
                            The prototype can be accessed through the following link.
                        </p>
                        <div className="work-center-img w-60 mt-20">
                            <img src={hifiProtoImg} alt="" />
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Accessibility considerations</h4>
                        <div className="work-part-col-3">
                            <div className="work-part-text">
                                <span className="count inline mb-20">1</span>
                                <p>Ensured that the implemented color scheme passes the suggested contrast ratio for better legibility.</p>
                            </div>
                            <div className="work-part-text">
                                <span className="count inline mb-20">2</span>
                                <p>Proper dimensions for the used visual such as images and icons used on the screen were applied to ensure visibility.</p>
                            </div>
                            <div className="work-part-text">
                                <span className="count inline mb-20">3</span>
                                <p>Accessibility options to the offered amenities were included on the screens to better serve users that will require such services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Going forward</h2>
                <div className="work-section">
                    <div className="work-part-text">
                        <h4>Takeaways</h4>
                        <div className="work-part-col-2 mt-20">
                            <div className="work-part-text">
                                <h4>Impact</h4>
                                <p>
                                    The website was able to provide a seamless and efficient process of obtaining their preferred set-up and schedule to watch their favorite new movies.<br/><br/>
                                    <span className="italic">“I see myself vising this website to see and book tickets for new movies.”</span>
                                </p>
                            </div>
                            <div className="work-part-text">
                                <h4>Lesson Learned</h4>
                                <p>
                                    The lesson that stood out the most is that the users’ are truly the ones who made the whole journey of creating the website go. Their feedback has been the vital force that moved the product development process forward
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Next steps</h4>
                        <div className="work-part-col-2 mt-20">
                            <div className="work-part-text">
                                <span className="count inline mb-20">1</span>
                                <p>As there will still be possible new points for improvement that will arise during the next course of the product development studies, iterations on the design will still occur, with the help of continuous conducting of usability studies.</p>
                            </div>
                            <div className="work-part-text">
                                <span className="count inline mb-20">2</span>
                                <p>Aside from usability studies, new research will also be done to acquire insights on possible trends and new methods of enabling users to watch their favorite new releases.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="work-appreciation-msg-section">
                <h2>My sincerest appreciation</h2>
                <div className="work-section">
                    <p>Thank you for taking the journey with us in creating this website. We were hoping you gained insights into the project the same way we did.</p>
                    <p>You can see more journeys with other products that we made through the following mediums:</p>
                    <div className="work-part-col-2 text-center mt-20">
                        <div className="work-part-text">
                            <p>Email: jdcuxdesign@email.com</p>
                        </div>
                        <div className="work-part-text">
                            <p>Website: ux.jdcworks.ph</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Work3;