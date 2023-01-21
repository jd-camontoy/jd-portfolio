import bgVideoSmall from '../assets/video/hero-vid-sm.webm';

const Header = () => {
    return (
        <div className="header-hero">
            <div className="hero-content">
                <h2>John Daniel Camontoy</h2>
                <h4>Web Designer and Developer</h4>
            </div>
            <div className="hero-art">
                <video autoPlay muted loop>
                    <source src={bgVideoSmall} type="video/webm" />
                    Your browser is not supported.
                </video>
            </div>
            <div className="hero-buttons">
                <a href="#" className="jd-btn-primary">
                    Let's Create
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
    );
}

export default Header;