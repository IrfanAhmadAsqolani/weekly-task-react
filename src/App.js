import './App.css';
import HomePage from './Pages'
import IntroductionReact from './Component/IntroductionReact';
import ReactFundamental from './Component/ReactFundamental';
import ReactRouting from './Component/ReactRouting';
import EventHandling from './Component/EventHandling';
import ReactHook from './Component/ReactHook';
import ReactForm from './Component/ReactForm';
import GlobalStateManagement from './Component/GlobalStateManagement';
import ReactTesting from './Component/ReactTesting';
import Deployment from './Component/Deployment';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/IntroductionReact' element={<IntroductionReact />}/>
          <Route path="/ReactFundamental" element={<ReactFundamental />} />
          <Route path="/ReactRouting" element={<ReactRouting />} />
          <Route path="/EventHandling" element={<EventHandling />} />
          <Route path="/ReactHook" element={<ReactHook />} />
          <Route path="/ReactForm" element={<ReactForm />} />
          <Route path="/GlobalStateManagement" element={<GlobalStateManagement />} />
          <Route path="/Testing" element={<ReactTesting />} />
          <Route path="/Deployment" element={<Deployment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

