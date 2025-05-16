

// DESTOP NAVBAR
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavWrapp = styled.nav`
    width: 100%;
    height: auto;
    display: flex;
    padding: 30px 20px;
    justify-content: space-between;
    /* align-items: center; */
    color: #082f49;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

`


export const NavContent = styled.div`
    display: flex;
    width: auto;
    flex-direction: row;
    color: #082f49;
    gap: 10px;
    /* align-items: center; */
   
    img{
        width: 60px;
    
    }

 
`


export const NavLinks = styled.ul`
    display: flex;
    width: auto;
    color: #082f49;
    position: relative;
    gap: 20px;
    /* align-items: center; */
    list-style: none;
    margin-top: 10px;


    ul{
         list-style: none;
         margin-top: 10px;
         color: #082f49;
         border-top: 2px solid #FF6805;
         border-radius: 10px;
         padding: 20px;
         position: absolute;
         background-color: white;
         display: flex;
         flex-direction: column;
         gap: 10px;
         z-index: 999;
        //  font-size: 14px;
         box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    }

    
     @media (max-width:768px) {
        display: ${({displayMobileMenu})=> displayMobileMenu || 'flex'};
        flex-direction: column;
        position: absolute;
        background-color: #0D3984;
        align-items: start;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        width: 100%;
        z-index: 100;
        left:0;
        padding: 50px 100px;

         ul{
                    background-color: #0D3984;
                    border: none;
         }
    }
`


export const LinkStyle = styled.a`
    text-decoration: none;
    color: blue;
    display: flex;
    color: #082f49;
    gap: 5px;
    /* align-items: center; */

        @media (max-width:768px) {
            color: white;
        }
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;   
`


export const ButtonLogin = styled.button`  
     display: none;
    
    @media (max-width:768px) {
        background-color: #FF6805;
            color: white;
            border: none;
            border-top-left-radius: 10px;
            border-bottom-right-radius: 10px;
            padding: 14px 25px;
            display: flex;
            cursor: pointer;
    }


`


export const Button = styled.button`
    background-color: #FF6805;
    color: white;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 14px 25px;
          cursor: pointer;

    
    @media (max-width:768px) {
     display: none;
    }

`



export const Hamburger = styled.span`
    font-size: 25px;
    color: #0D3984;
    cursor: pointer; 
    display: none;

    @media (max-width:768px) {
     display: flex;
    }
`

export const CloseHamburger = styled.span`
    color: #0D3984;
      font-size: 25px;
      cursor: pointer;
        display: none;
    
        @media (max-width:768px) {
     display: flex;
    }
`



// // MOBILE NAV BAR
// export const MobilNavWrap = styled.div`
// display: none;

//  @media (max-width:768px) {
//         display: flex;
//         background-color: #0d398475;
//         position: relative;
//         top: 0;
//         left: 0;
//         display: flex;
//         color: white;
//         height: 50vh;
//         align-item: center;
//         width: 100%;
//         justify-content:flex-end;
//     }
// `





// export const MobileNavContent = styled.div`

//     display:none; 

//         @media (max-width:768px) {
//             height: 100vh;
//             width: 60%;
//             background-color: red;
//             color: white;
//             display: flex;
//         }

// `