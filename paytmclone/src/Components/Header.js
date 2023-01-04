import React from 'react';
import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const [uname, setUname] = useState("Sign In");


  return (
    <>
    <div className="header bg-[#ccc] w-[100%] h-[92px] bg-[#fff]">
      <div className='navMenu w-[90%] m-[0 auto] p-[14px] w-[100%]'>
    
        <a href='#'>
        <img alt='logo' className='logo sm:text-center' src='https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png' />
        </a>
      

      {/* nav items */}
      {/* ref webpage https://blog.logrocket.com/create-responsive-navbar-react-css/ */}

      <nav className="navigation">
      
      <button className="hamburger"  onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Paytm for Consumer</a>
          </li>
          <li>
            <a href="/about">Paytm For Business</a>
          </li>
          <li>
            <a href="/contact">Ivestor relations</a>
          </li>
          <li>
            <a href="/contact">Company </a>
          </li>
          <li>
            <a href="/contact">Career </a>
          </li>
          <li>
          <div onClick={ () => setUname("Vishwas")} className='signIn'>
        <span> {uname}</span>
        </div>
          </li>
        </ul>
        
      </div>
    </nav>
    
    </div>
    </div>
    </>
  )
}




// RFC - shortcut for funtional component
