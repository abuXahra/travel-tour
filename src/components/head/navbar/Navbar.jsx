
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button, ButtonLogin, ButtonWrapper, CloseHamburger, Hamburger, LinkStyle,  NavContent, NavLinks, NavWrapp } from './Navbar.style'
import logo from '../../../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'
import { RxDash } from 'react-icons/rx'
import {menuItems} from '../../../data/object/menu'

export default function Navbar() {
   
    const nagivate = useNavigate();

    // Handles sub menu
    const [showSubMenu, setShowSubMenu]  = useState(false)

    const [activeMenu, setActiveMenu] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveMenu(index);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null); 
    };



     // Initialize isOpen state for each menu item in mobile
     const [isOpen, setIsOpen] = useState(Array(menuItems.length).fill(false));

     // Function to toggle submenu open/close
     const toggleSubMenu = (index) => {
         const updatedOpenState = isOpen.map((item, i) => i === index ? !item : false);
         setIsOpen(updatedOpenState);
     };


          // hide in mobile using display none or flex
          const [displayMobileMenu, setDisplayMobileMenu] = useState('none')

       // Humberger icon
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const [closeIcon, setCloseIcon] = useState(false);
    const [hamburgerIcon, setHamburgerIcon] = useState(true);
  
  


    const handleHamburgerIcon = ()=>{
        setHamburgerIcon(false)
        setCloseIcon(true)
        setIsMobileMenuOpen(false)
        setDisplayMobileMenu('flex');
    }
    
    const handleCloseIcon = ()=>{
        setHamburgerIcon(true)
        setCloseIcon(false)
        setIsMobileMenuOpen(true)
        setDisplayMobileMenu('none');
    }
 

 const handleMenuClick =()=>{
    setDisplayMobileMenu('none')
    setCloseIcon(false)
    setHamburgerIcon(true)
 }



 const handleButtonClick =()=>{
    setDisplayMobileMenu('none')
    setCloseIcon(false)
    setHamburgerIcon(true)
    nagivate('/login')
 }

  return (
    <NavWrapp>
        <NavContent>
            {/* Logo */}
            <a href="/">  <img src={logo} alt="" srcset="" /></a>
            <div>
              <NavLinks displayMobileMenu={displayMobileMenu}>
                        {
                            isMobileMenuOpen ? (            menuItems.map((menu, i)=>(
                                <li key={i} style={{paddingBottom: "10px"}}   onMouseEnter={() => handleMouseEnter(i)}
                                onMouseLeave={handleMouseLeave}><LinkStyle href={menu.href}>{menu.title} {menu.submenu && <IoMdArrowDropdown />} </LinkStyle> 
                                    {activeMenu === i && menu.submenu && 
                                        (
                                            <ul>
                                                {
                                                    menu.submenu.map((item, j)=>(
                                                        <li key={j}><LinkStyle href={item.href}><RxDash/> {item.subTile}</LinkStyle></li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                    }
                            </li> 
                        ))):
                            (menuItems.map((menu, i)=>(
                                    <li  key={i} onClick={() => toggleSubMenu(i)} style={{paddingBottom: "10px"}}><LinkStyle to={menu.href}>{menu.title} {menu.submenu && <IoMdArrowDropdown />} </LinkStyle> 
                                        {isOpen[i] && menu.submenu && 
                                            (
                                                <ul>
                                                    {
                                                        menu.submenu.map((item, j)=>(
                                                            <li key={j}><LinkStyle href={item.href} onClick={handleMenuClick}><RxDash/> {item.subTile}</LinkStyle></li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }
                                </li> 
                            )))
                    }
                 <li onClick={handleMenuClick}><LinkStyle href={'/affiliate'}>Affiliate</LinkStyle></li>
                 <div><ButtonLogin onClick={handleButtonClick} type="button">Sign in</ButtonLogin></div>
                </NavLinks> 
            </div>
        </NavContent>

        <ButtonWrapper>
            <Button onClick={()=>nagivate('/login')} type="button">Sign in</Button>
            <Hamburger onClick={handleCloseIcon}>{closeIcon && <FaTimes/>}</Hamburger>  
            <CloseHamburger onClick={handleHamburgerIcon}>{hamburgerIcon && <FaBars/>}</CloseHamburger> 
        </ButtonWrapper>
    </NavWrapp>
  )
}







// function MobileNavbar() {
//     // const [showSubMenu, setShowSubMenu]  = useState(false)

//     // const [activeMenu, setActiveMenu] = useState(null);

//     // const handleMouseEnter = (index) => {
//     //     setActiveMenu(index);
//     // };

//     // const handleMouseLeave = () => {
//     //     setActiveMenu(null);
//     // };

   
//   return (
//     <MobileNavWrap>
// kjbhjkljjkjkjkjkjk
//         <MobileNavContent>
//            dffsafrbef


//         </MobileNavContent>
//     </MobileNavWrap>
//   )
// }




//         {/* <MobileButtonWrapper>
// //             <Button type="button">Sign in</Button>
//             <Hamburger><FaTimes/></Hamburger>  
//             <CloseHamburger><FaBars/></CloseHamburger> 
//         </MobileButtonWrapper> */}



        {/* Logo */}
 {/* <a href="/">  <img src={logo} alt="" srcset="" /></a>
            <div>
              <MobileNavLinks showSubMenu={showSubMenu}>
                        {
                            menuItems.map((menu, i)=>(
                                    <li key={i} style={{paddingBottom: "10px"}}  onMouseEnter={() => handleMouseEnter(i)}
                                    onMouseLeave={handleMouseLeave}><LinkStyle to={menu.href}>{menu.title} {menu.submenu && <IoMdArrowDropdown />} </LinkStyle> 
                                        {activeMenu === i && menu.submenu && 
                                            (
                                                <ul>
                                                    {
                                                        menu.submenu.map((item, j)=>(
                                                            <li key={j}><LinkStyle to={item.href}><RxDash/> {item.subTile}</LinkStyle></li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }
                                </li> 
                            ))
                    }
                </MobileNavLinks> 
            </div> */}