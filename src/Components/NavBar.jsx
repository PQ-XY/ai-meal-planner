import React from 'react';
import './NavBar.css';
import NavHomeLogo from './NavHomeLogo';
import NavMealLogo from './NavMealLogo';
import NavPlannerLogo from './NavPlannerLogo';
import { Link, Outlet, useLocation} from 'react-router-dom'

export default function NavBar() {

    //update the button style based on the url
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

  return (
    <div className='navBarLayout'>
        <div className='navBackground'>
            <div className='siteLogo'>
                <svg width="53" height="60" viewBox="0 0 53 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M45.2279 3.32004C32.8666 1.48643 21.3593 10.0209 19.5257 22.3822L18.54 29.027L18.4882 29.3767L25.4826 30.4142C37.844 32.2478 49.3513 23.7134 51.1849 11.352L52.2224 4.35755L45.2279 3.32004ZM52.2224 4.35755C40.8682 10.5051 30.3368 18.0636 20.8789 26.8533L18.54 29.027L20.3276 27.0846C29.264 17.3744 40.1267 9.634 52.2224 4.35755Z" fill="#92AE6D"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.2208 45.2208C39.3583 37.372 30.675 33.3297 22.8261 36.1922L18.385 37.8119L20.0047 42.2531C22.8672 50.1019 31.5505 54.1442 39.3994 51.2817L43.8405 49.662L42.2208 45.2208ZM43.8405 49.662L42.9756 48.9927C35.7577 43.4076 27.3386 39.5796 18.385 37.8119C27.8761 38.9081 36.8701 43.1278 43.8405 49.662Z" fill="#C07373"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6068 2.66814C9.92998 2.34659 9.19676 2.12444 8.42604 2.02054C8.46458 2.13043 8.48553 2.24858 8.48553 2.37163V15.8068C8.48553 16.3926 8.01066 16.8675 7.42488 16.8675C6.8391 16.8675 6.36423 16.3926 6.36423 15.8068V2.37163C6.36423 2.24857 6.38519 2.1304 6.42373 2.02051C5.65301 2.12438 4.91979 2.3465 4.24294 2.66803V16.8675C3.07138 16.8675 2.12164 15.9178 2.12164 14.7462V4.1819C0.809351 5.521 0.000209409 7.35504 0.000178629 9.37807L9.97918e-10 21.1185C-3.43919e-05 23.3791 0.888936 25.549 2.47499 27.1598C4.06101 28.7705 4.94998 30.9404 4.94998 33.2009V57.5257C4.94998 58.8924 6.05793 60.0004 7.42465 60.0004C8.79137 60.0004 9.89932 58.8924 9.89932 57.5257V33.2008C9.89932 30.9404 10.7883 28.7706 12.3743 27.1599C13.9604 25.5493 14.8494 23.3795 14.8494 21.119V9.37818C14.8494 7.35523 14.0403 5.52124 12.7281 4.18213V14.7462C12.7281 15.9178 11.7784 16.8675 10.6068 16.8675V2.66814Z" fill="#111111"/>
                </svg>
            </div>
            <div className='navBar'>
                <button style={{background:isActive('/app/meals')?'black':'none'}}>
                    <Link className='navLink' to='/app/meals' style={{textDecoration:'none', color:isActive('/app/meals')?'white':'#E8EDD5'}}>
                        <NavMealLogo color={isActive('/app/meals')?'white':'#E8EDD5'}></NavMealLogo>
                        Meals
                    </Link>
                </button>
                <button style={{background:isActive('/app/home')?'black':'none'}}>
                    <Link className='navLink' to='/app/home' style={{textDecoration:'none', color:isActive('/app/home')?'white':'#E8EDD5'}}>
                        <NavHomeLogo color={isActive('/app/home')?'white':'#E8EDD5'}></NavHomeLogo>
                        Home
                    </Link>
                </button>
                <button style={{background:isActive('/app/planner')?'black':'none'}}>
                    <Link className='navLink' to='/app/planner' style={{textDecoration:'none', color:isActive('/app/planner')?'white':'#E8EDD5'}}>
                        <NavPlannerLogo color={isActive('/app/planner')?'white':'#E8EDD5'}></NavPlannerLogo>
                        Planner
                    </Link>
                </button>
            </div>
        </div>
        <div className='contentBackground'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
