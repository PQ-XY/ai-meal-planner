import WelcomePage from './pages/WelcomePage'
import InvestPage11 from './pages/InvestPage11';
import InvestLayout from './layouts/InvestLayout';
import InvestPage12 from './pages/InvestPage12';
import InvestPage21 from './pages/InvestPage21';
import InvestPage22 from './pages/InvestPage22';
import InvestPage31 from './pages/InvestPage31';
import InvestPage13 from './pages/InvestPage13';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/invest" element={<InvestLayout />}>
        <Route path="/invest/1-1" element={<InvestPage11 />} />
        <Route path="/invest/1-2" element={<InvestPage12 />} />
        <Route path="/invest/1-3" element={<InvestPage13 />} />
        <Route path="/invest/2-1" element={<InvestPage21 />} />
        <Route path="/invest/2-2" element={<InvestPage22 />} />
        <Route path="/invest/3-1" element={<InvestPage31 />} />
      </Route>
    </>
  )
);

function WelcomeAndInvest() {
  return  <RouterProvider router={router}/>;
}

export default WelcomeAndInvest
