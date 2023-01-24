import BG from './components/BG';
import Header from './components/Header';
import Content from './components/Content';
import Modals from './components/Modals';
import { WorksProvider } from './components/WorkContext';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    document.querySelector('#content-loading-hero-art').style.animation = 'moveArtUp .6s ease-in .6s';
    setTimeout(() => {
      document.querySelector('#content-loading').style.display = 'none';
      let rootComponent = document.querySelector('#root');
      rootComponent.style.display = 'block';
      rootComponent.style.animation = 'fadeIn .2s ease-in';
    }, 900);
  })

  return (
    <main className="main-container">
      <WorksProvider>
        <BG />
        <Header
          changeIndicatorClass={changeIndicatorClass}
          changeAboutViewDisplayedStatus={changeAboutViewDisplayedStatus}
          doScrollToCreateSection={doScrollToCreateSection}
        />
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
