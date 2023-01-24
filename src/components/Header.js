const Header = ({ changeIndicatorClass, changeAboutViewDisplayedStatus, doScrollToCreateSection }) => {
    const DISPLAY_ABOUT = true;
    const CLASS_INDICATOR_ABOUT = 'point-to-about';

    const goToAboutScrollDown = () => {
        changeAboutViewDisplayedStatus(DISPLAY_ABOUT);
        changeIndicatorClass(CLASS_INDICATOR_ABOUT);
        setTimeout(() => {
            doScrollToCreateSection();
        }, 100);
    }

    return (
        <div className="header-hero">
            <div className="hero-content default">
                <h2>John Daniel Camontoy</h2>
                <h4>Web Designer and Developer</h4>
            </div>
            <div className="hero-content mobile-only">
                <h2>John Daniel Camontoy</h2>
                <h4>Web Designer and Developer</h4>
                <button className="jd-btn-primary" onClick={() => goToAboutScrollDown()}>
                    Let's Create
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div className="hero-art">
                <video autoPlay muted loop>
                    <source src="/hero-vid-sm.webm" type="video/webm" />
                    Your browser is not supported.
                </video>
            </div>
            <div className="hero-buttons">
                <button className="jd-btn-primary" onClick={() => goToAboutScrollDown()}>
                    Let's Create
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Header;