import BG from './components/BG';
import Header from './components/Header';
import Content from './components/Content';
import Modals from './components/Modals';
import { WorksProvider } from './components/WorkContext';

function App() {
  return (
    <main className="main-container">
      <WorksProvider>
        <BG />
        <Header/>
        <Content/>
        <Modals/>
      </WorksProvider>
    </main>
  );
}

export default App;
