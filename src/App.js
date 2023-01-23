import BG from './components/BG';
import Header from './components/Header';
import Content from './components/Content';
import Modals from './components/Modals';
import { WorksProvider } from './components/WorkContext';
import { useState } from 'react';

const App = () => {
  const [ aboutIsDisplayed, setAboutIsDisplayed ] = useState(false);
  const [ indicatorClass, setIndicatorClass ] = useState('');
  const [ scrollToCreateSection, setScrollToCreateSection ] = useState(false);

  const changeAboutViewDisplayedStatus = (aboutViewIsHidden) => {
    setAboutIsDisplayed(aboutViewIsHidden);
  }

  const changeIndicatorClass = (indicatorClass) => {
      setIndicatorClass((prevState) => indicatorClass);
  }

  const doScrollToCreateSection = () => {
    setScrollToCreateSection(true);
    setTimeout(() => setScrollToCreateSection(false), 100);
  }

  return (
    <main className="main-container">
      <WorksProvider>
        <BG />
        <Header
          changeIndicatorClass={changeIndicatorClass}
          changeAboutViewDisplayedStatus={changeAboutViewDisplayedStatus}
          doScrollToCreateSection={doScrollToCreateSection}
        />
        {/* <Content changeDisplayedStatusAbout={changeAboutViewDisplayedStatus} aboutIsDisplayed={aboutIsDisplayed}/> */}
        <Content 
          indicatorClass={indicatorClass}
          changeIndicatorClass={changeIndicatorClass}
          changeAboutViewDisplayedStatus={changeAboutViewDisplayedStatus}
          aboutIsDisplayed={aboutIsDisplayed}
          scrollToCreateSection={scrollToCreateSection}
        />
        <Modals/>
      </WorksProvider>
    </main>
  );
}

export default App;
