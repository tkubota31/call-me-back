import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./AppHeader.module.css";
import logo from '../../assets/logo.jpg';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'

import Logo from "../Logo";
import { MdClose, MdDensityMedium } from "react-icons/md";

export type AppHeaderProperties = {
  currentUser: string,
}

export default function AppHeader({ currentUser }: AppHeaderProperties) {
  const [mobileView, setMobileView] = useState(false);
  const [isDrawerOpen, setDrawerIsOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    const setResponsiveness = () => {
      return setMobileView(window.innerWidth < 720);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const logoComponent = () => {
    return (
      <div className={style.logo}>
        <img src={logo} height={50}/>
      </div>
    )};

  const displayDesktop = () => {
    return (
      <>
        {logoComponent()}
        <div className={style.navOptions}>
          <div className={style.navOption}>
            Contact
          </div>
          {currentUser 
            ? <>
                <div className={style.navOption}>Update Preferences</div>
                <div className={style.navOption}>Sign out</div>
              </>
            : <div className={style.navOption}>
                Sign Up
              </div>
          }
          <div>
          </div>
        </div>
      </>
    )
  }

  const handleNavOpenClick = (event: React.MouseEvent<HTMLElement>) => {
    setDrawerIsOpen(true);
  }
  const handleNavCloseClick = (event: React.MouseEvent<HTMLElement>) => {
    setDrawerIsOpen(false);
  }

  const displayMobile = () => {
    return (
      <>
        {logoComponent()}
        <div className={style.hamburger} onClick={(e) => handleNavOpenClick(e)}>
          <MdDensityMedium />
        </div>
        <Drawer
          open={isDrawerOpen}
          onClose={toggleDrawer}
          direction='right'
          className='bla bla bla'
        >
        <ul>
            <li className={style.navOption} onClick={(e) => toggleDrawer()}><MdClose /> </li>
            {currentUser 
              ? <>
                  <li className={style.navOption}>Update Preferences</li>
                  <li className={style.navOption}>Sign out</li>
                </>
              : <li className={style.navOption}>
                  Sign Up
                </li>
            }
          </ul>
          </Drawer>
      </>
    )
  }


  return (
    <header className={style.header}>
      {mobileView ? displayMobile() : displayDesktop()}
    </header>
  )
}