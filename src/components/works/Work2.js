import './work2.scss';
import projectOverviewImg from './assets/work2/po-1.png';
import personaImg1 from './assets/work2/persona-1.png';
import personaImg2 from './assets/work2/persona-2.png';
import caImg from './assets/work2/ca-1.png';
import ideationImg from './assets/work2/ideation-1.png';
import dwImg from './assets/work2/dw-1.png';
import lwpImg from './assets/work2/lfp-1.png';
import mockupImg1 from './assets/work2/mockups-1.png';
import mockupImg2 from './assets/work2/mockups-2.png';
import hwpImg from './assets/work2/hfp-1.png';
import sitemapImg from './assets/work2/sitemap-1.png';
import rdImg from './assets/work2/rd-1.png';

const Work2 = () => {
    return (
        <main className="work2">
            <header className="work-title-section">
                <h1>Lendlove Mobile App and Responsive Website</h1>
                <h2>Case Study for Creating a Cross-Platform Community Service Network</h2>
            </header>
            <section>
                <h2>Project Overview</h2>
                <div className="work-section">
                    <div className="work-section-col-2">
                        <div className="work-part-left">
                            <div className="work-part-text">
                                <h4>The Product</h4>
                                <p>Lendlove was conceptualized and envisioned to be a hub for volunteers and organizations to communicate and conduct successful community services and do social good.</p>
                            </div>
                            <div className="work-part-text">
                                <h4>Project duration</h4>
                                <p>November 2022 – January 2023</p>
                            </div>
                        </div>
                        <div className="work-part-right">
                            <img src={projectOverviewImg} alt="" />
                        </div>
                    </div>
                    
                    <div className="work-part-fourths">
                        <div className="work-part-text">
                            <h4>The Problem</h4>
                            <p>Volunteers and organizations need a more convenient and professional way to connect and to organize community services.</p>
                        </div>
                        <div className="work-part-text">
                            <h4>The Goal</h4>
                            <p>Design an mobile application and a responsive website that enables both volunteers and organizations to build community services, with minimal risks and ensured for success.</p>
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
            </section>
            <section>
                <h2>Understanding the User</h2>
                <div className="work-section">
                    <div className="work-part-text">
                        <h4>User research: Summary</h4>
                        <ul>
                            <li>Conducted interviews with possible users, and created empathy maps from the gathered responses to further understand users’ preferences and points for assistance.</li>
                            <li>The primary user group confirmed are adults who had struggles with looking for volunteer opportunities, both physically and through online respective services. This confirmed the assumptions about the volunteers eagerness to find a more efficient way of looking for opportunities to do charitable work, with peace of mind and effectiveness as the primary points of concern.</li>
                            <li>Other factors learned includes the vicinity of opportunities, organizations’ reputation and network within volunteers.</li>
                        </ul>
                    </div>
                    <div className="work-part-text">
                        <h4>Persona</h4>
                        <div className="work-center-img w-60 mb-20">
                            <img src={personaImg1} alt="" />
                        </div>
                        <div className="work-part-text sub">
                            <h4>Brian's Problem Statement</h4>
                            <p>Brian is a HR professional who need a way to determine qualified and reputable organization to cooperate with in doing company community services because he needs to ensure the success of the service, both on logistics and the charitable aspect.</p>
                        </div>
                        <div className="work-center-img w-60 mb-20">
                            <img src={personaImg2} alt="" />
                        </div>
                        <div className="work-part-text sub">
                            <h4>Hanna's Problem Statement</h4>
                            <p>Hanna is an eager student volunteer who needs a way to determine nearby community services or organizations she can be a part of because of her desire to be of service and to fulfill here academic research milestones.</p>
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Competitive audit</h4>
                        <p>An audit on similar volunteer network services were made to determine possible gaps and to opportunities for improvements that will be implemented through the product.</p>
                        <div className="work-center-img w-80 mt-20">
                            <img src={caImg} alt="" />
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Ideation</h4>
                        <p>A prompt ideation were conducted to generate ideas and related concepts based on the opportunities and implementations learned through the conducted competitive audit. Using the Crazy Eights methods, several elements were created that will be later applied to the wireframes.</p>
                        <div className="work-center-img w-60 mt-20">
                            <img src={ideationImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Starting the design</h2>
                <div className="work-section">
                    <div className="work-part-text">
                        <h4>Digital wireframes</h4>
                        <div className="work-part-col-2 with-img">
                            <img className="mr-20" src={dwImg} alt="" />
                            <p>
                                The digital wireframes were developed after the ideation phase to materialize the concepts that will later be tested through a usability study to determine its effectiveness.<br/><br/>
                                One of the main considerations prior to the creation of the wireframe are the relevancy of the presented information and the capability to sort the presented information to make an efficient volunteer process.
                            </p>
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Low-fidelity prototype</h4>
                        <p>
                            Upon completing the necessary screens reflecting the overall flow of the application, a low-fidelity prototype was created, connecting the homepage to the volunteer opportunities suggestions, details entry and submission, up until to the approval of the volunteer request.<br/>
                            The prototype was then shared with the participants of the conducted usability study through this link, to gain new insights.
                        </p>
                        <div className="work-center-img w-80 mt-20">
                            <img src={lwpImg} alt="" />
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Usability study: Parameters</h4>
                        <div className="work-part-fourths alt">
                            <div className="work-part-text">
                                <h4>Study type</h4>
                                <p>Unmoderated usability study</p>
                            </div>
                            <div className="work-part-text">
                                <h4>Location</h4>
                                <p>Philippines, remote</p>
                            </div>
                            <div className="work-part-text">
                                <h4>Participants</h4>
                                <p>7 participants</p>
                            </div>
                            <div className="work-part-text">
                                <h4>Length</h4>
                                <p>30-60 minutes</p>
                            </div>
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Usability study: findings</h4>
                        <p>The following significant findings were determined upon the completion synthetization of collected information from the conducted usability study.</p>
                        <div className="work-part-col-3 mt-20">
                            <div className="work-part-text">
                                <span className="count inline mb-20">1</span>
                                <p>Users tend to prefer a personalized result set that are determined by a set of inputs they previously selected.</p>
                            </div>
                            <div className="work-part-text">
                                <span className="count inline mb-20">2</span>
                                <p>Implementation of visuals such as images and icons aid the users in a great deal when it comes to determining options to go with.</p>
                            </div>
                            <div className="work-part-text">
                                <span className="count inline mb-20">3</span>
                                <p>A notification capability especially on features that rely on external parties to be completed is a preferred feature of users.</p>
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
                            <p>Given the insights gained from the recently conducted first usability study, mockups were made with the updated displays that reflects the users’ suggestions including engaging visuals, and updated features such as personalized filtering</p>
                            <img className="ml-20" src={mockupImg1} alt="" />
                        </div>
                        <p>Whereas upon receiving the insights from the conducted second usability study, additional screens were added to reflect more relevant feature including notification badges and improved submission status page.</p>
                        <div className="work-center-img w-80 mt-20">
                            <img src={mockupImg2} alt="" />
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>High-fidelity prototype</h4>
                        <p>
                            The created high-fidelity prototype was ensured to have the remaining related screens that reflect the user journey through the app, from the presentation of the personalized suggestions, volunteer opportunity pages, submission of request, and screens for the status of the volunteer request.<br/>
                            The prototype can be accessed through the following link.
                        </p>
                        <div className="work-center-img w-80 mt-20">
                            <img src={hwpImg} alt="" />
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Accessibility considerations</h4>
                        <div className="work-part-col-3">
                            <div className="work-part-text">
                                <span className="count inline mb-20">1</span>
                                <p>Implemented elements such as images and icons has proper dimensions to ensure visibility and interactability.</p>
                            </div>
                            <div className="work-part-text">
                                <span className="count inline mb-20">2</span>
                                <p>The implemented color scheme was deliberately chosen and implemented into the screens, ensuring proper contrast ratio for better legibility.</p>
                            </div>
                            <div className="work-part-text">
                                <span className="count inline mb-20">3</span>
                                <p>Aside from the use of visual assets such as images and icons, text based information are also implemented with screen readers in mind, to ensure better readability for such services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Responsive Design</h2>
                <div className="work-section">
                    <div className="work-part-text">
                        <h4>Sitemap</h4>
                        <p>
                            Upon the completion of the mobile application designs for the Lendlove service, the design process was moved towards the creation of the accompanying web service.<br/>
                            With the created sitemap, relevant pages and its proper information architecture was deliberately organized to ensure cohesiveness.
                        </p>
                        <div className="work-center-img w-60 mt-20">
                            <img src={sitemapImg} alt="" />
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Responsive designs</h4>
                        <div className="work-center-img w-80 mt-20">
                            <img src={rdImg} alt="" />
                        </div>
                        <p>Variation of web design for desktops, tablets, and mobile access were made, with the unique use cases for each devices being considered upon implementation.</p>
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
                                <p>Volunteers and organizations both want the success of doing community services and will take necessary steps to ensure it.</p>
                            </div>
                            <div className="work-part-text">
                                <h4>Lesson Learned</h4>
                                <p>Going through the design process to create a product that addresses both the volunteers’ and organizations’ goals on doing community service taught me the value of collaboration and communication</p>
                            </div>
                        </div>
                    </div>
                    <div className="work-part-text">
                        <h4>Next steps</h4>
                        <div className="work-part-col-2 mt-20">
                            <div className="work-part-text">
                                <span className="count inline mb-20">1</span>
                                <p>Aside from usability studies, new research will also be done to acquire insights on providing better networking between volunteers and organizations.</p>
                            </div>
                            <div className="work-part-text">
                                <span className="count inline mb-20">2</span>
                                <p>As it is always a possibility to determine improvements during the next course of the product development studies, iterations on the design will still occur, with the help of continuous conducting of usability studies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="work-appreciation-msg-section">
                <h2>My sincerest appreciation</h2>
                <div className="work-section">
                    <p>Thank you for taking the journey with us in creating this service. We were hoping you gained insights into the project the same way we did.</p>
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

export default Work2;