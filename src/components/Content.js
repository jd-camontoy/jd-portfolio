import Works from "./Works";
import AboutMe from "./AboutMe";

const Content = ({ 
    indicatorClass,
    changeIndicatorClass,
    changeAboutViewDisplayedStatus,
    aboutIsDisplayed,
    scrollToCreateSection
}) => {
    const CLASS_INDICATOR_WORKS = 'point-to-works';
    const CLASS_INDICATOR_ABOUT = 'point-to-about';
    const DISPLAY_ABOUT = true;
    const DISPLAY_WORKS = false;

    const displayRecentWorks = () => {
        changeIndicatorClass(CLASS_INDICATOR_WORKS);
        changeAboutViewDisplayedStatus(DISPLAY_WORKS);
    }

    const displayAboutMe = () => {
        changeIndicatorClass(CLASS_INDICATOR_ABOUT);
        changeAboutViewDisplayedStatus(DISPLAY_ABOUT);
    }

    const displayWorks = () => {
        return (aboutIsDisplayed) ? <AboutMe scrollToCreateSection={scrollToCreateSection}/> : <Works/>;
    }

    return (
        <div className="content">
            <div className="tabs">
                <div className="tabs-header">
                    <div className="tabs-header-item active" onClick={() => displayRecentWorks()}>
                        Recent Works
                    </div>
                    <div className="tabs-header-item" onClick={() => displayAboutMe()}>
                        About Me
                    </div>
                </div>
                <div className={`tabs-indicator ${indicatorClass}`}></div>
            </div>

            {displayWorks()}
        </div>
    );
}

export default Content;