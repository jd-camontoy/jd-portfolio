import { useState } from "react";

import Works from "./Works";

const Content = () => {
    const CLASS_INDICATOR_WORKS = 'point-to-works';
    const CLASS_INDICATOR_ABOUT = 'point-to-about';

    const [indicatorClass, setIndicatorClass] = useState('');

    const changeIndicatorClass = (indicatorClass) => {
        setIndicatorClass((prevState) => indicatorClass);
    }

    return (
        <div className="content">
            <div className="tabs">
                <div className="tabs-header">
                    <div className="tabs-header-item active" onClick={() => changeIndicatorClass(CLASS_INDICATOR_WORKS)}>
                        Recent Works
                    </div>
                    <div className="tabs-header-item" onClick={() => changeIndicatorClass(CLASS_INDICATOR_ABOUT)}>
                        About Me
                    </div>
                </div>
                <div className={`tabs-indicator ${indicatorClass}`}></div>
            </div>

            <Works/>
        </div>
    );
}

export default Content;