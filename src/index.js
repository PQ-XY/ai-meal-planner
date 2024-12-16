import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Meals from './Components/Meals';
import Planner from './Components/Planner';
import WelcomePage from './pages/WelcomePage'
import InvestPage11 from './pages/InvestPage11';
import InvestLayout from './layouts/InvestLayout';
import InvestPage12 from './pages/InvestPage12';
import InvestPage21 from './pages/InvestPage21';
import InvestPage22 from './pages/InvestPage22';
import InvestPage31 from './pages/InvestPage31';
import InvestPage13 from './pages/InvestPage13';
import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter>
    <Routes>
        {/* Set the default route to WelcomePage */}
        <Route path="/" element={<WelcomePage />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/invest" element={<InvestLayout />}>
          <Route path="/invest/1-1" element={<InvestPage11 />} />
          <Route path="/invest/1-2" element={<InvestPage12 />} />
          <Route path="/invest/1-3" element={<InvestPage13 />} />
          <Route path="/invest/2-1" element={<InvestPage21 />} />
          <Route path="/invest/2-2" element={<InvestPage22 />} />
          <Route path="/invest/3-1" element={<InvestPage31 />} />
        </Route>
          <Route path='/loading' element={<LoadingPage />} />
        <Route path='/app' element={<App />}>
          <Route path='/app/meals' element={<Meals />} />
          <Route path='/app/home' element={<Home />} />
          <Route path='/app/planner' element={<Planner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
