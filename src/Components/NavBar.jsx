import React from 'react';
import './NavBar.css';
import NavHomeLogo from './NavHomeLogo';
import NavMealLogo from './NavMealLogo';
import NavPlannerLogo from './NavPlannerLogo';
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function NavBar() {

    let [style, setStyle] = useState('style1')
    let changeStyle = (content) => {
        setStyle(content)
    }

  return (
    <div className='navBarLayout'>
        <div className='navBackground'>
            <div className='siteLogo'>
                <svg width="118" height="127" viewBox="0 0 118 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69 78V53.7038C69 53.5628 69.0334 53.4239 69.0976 53.2984V53.2984C74.0599 43.5849 87.9401 43.5849 92.9024 53.2984V53.2984C92.9666 53.4239 93 53.5628 93 53.7038V78" stroke="#94B06E" stroke-width="9.79592" stroke-linecap="round"/>
                    <g filter="url(#filter0_d_66_6294)">
                        <path d="M45 77.8569V53.5607C45 53.4198 45.0334 53.2809 45.0976 53.1553V53.1553C50.0599 43.4419 63.9401 43.4419 68.9024 53.1553V53.1553C68.9666 53.2809 69 53.4198 69 53.5607V77.8569" stroke="#111111" stroke-width="9.79592" stroke-linecap="round"/>
                    </g>
                    <path d="M87.3674 36.7143C87.3674 29.1401 93.5075 23 101.082 23H105.367V27.2857C105.367 34.8599 99.2273 41 91.6531 41H87.3674V36.7143Z" fill="#C07373"/>
                    <defs>
                        <filter id="filter0_d_66_6294" x="0.102051" y="0.972168" width="117.796" height="125.783" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="2" dy="2"/>
                            <feGaussianBlur stdDeviation="21"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_66_6294"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_66_6294" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className='navBar'>
                <button style={{background:style==='style1'?'black':'none'}} onClick={() => changeStyle('style1')}>
                    <Link className='navLink' to='/app/home' style={{textDecoration:'none', color:style==='style1'?'white':'#E8EDD5'}}>
                        <NavHomeLogo color={style==='style1'?'white':'#E8EDD5'}></NavHomeLogo>
                        Home
                    </Link>
                </button>
                <button style={{background:style==='style2'?'black':'none'}} onClick={() => changeStyle('style2')}>
                    <Link className='navLink' to='/app/meals' style={{textDecoration:'none', color:style==='style2'?'white':'#E8EDD5'}}>
                        <NavMealLogo color={style==='style2'?'white':'#E8EDD5'}></NavMealLogo>
                        Meal
                    </Link>
                </button>
                <button style={{background:style==='style3'?'black':'none'}} onClick={() => changeStyle('style3')}>
                    <Link className='navLink' to='/app/planner' style={{textDecoration:'none', color:style==='style3'?'white':'#E8EDD5'}}>
                        <NavPlannerLogo color={style==='style3'?'white':'#E8EDD5'}></NavPlannerLogo>
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
