import styled from "styled-components";



export const CustomizeWrapper  = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #0d398420;
    height: auto;
    /* position: relative; */

        
    @media (max-width:768px) {
    
        width: 100%;
        height: auto;

    }
    
`


export const TermsDetail = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
    background-color: #000000b9;
`


export const TermsDetailButton = styled.div`
    
`


export const CustomizeHeader = styled.div`
    height: 250px;
    width: 100%;
    background-color: #0D3984;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius:80%;

    
    @media (max-width:768px) {
        flex-direction: column;
        width: 100%;
        border-bottom-left-radius: 0%;
        border-bottom-right-radius:0%;
        height: 150px;
    }
`


export const CustomizeHeaderItems = styled.div`
    width: 100%;
    display: flex;
    /* gap: 30px; */
    padding: 30px;
    color: white;
    align-items: center;
    justify-content: space-between;

    @media (max-width:768px) {
        flex-direction: column;
        width: 100%;
        gap: 20px;
    }
`


export const  CustomizeHeaderTitle = styled.div`
        display: flex;
        gap: 30px;
        align-items: center;

        @media (max-width:768px) {
        width: 100%;

        h2{
            font-size: 20px;
        }
    }
`

export const CustomizeBody = styled.div`
    width: 100%;
    margin-top: -170px;
    display: flex;
    gap: 20px;
    padding: 20px 40px;
    height: auto;

    @media (max-width:768px) {
        flex-direction: column;
        width: 100%;
        gap: 20px;
        margin-top: 0px;
    }
`

// SIDEBAR
export const CustomizeSideBar = styled.div`
   width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    

    @media (max-width:768px) {
       
        width: 100%;
        height: auto;
        margin-bottom: 20px;
    }
`

export const CustomizeSideContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    gap: 20px;
`


export const SideFlightAirport = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #4a4a4a;
    font-size: 13px;
    border-bottom: 1px dashed #4a4a4a;
    padding-bottom: 20px;
        
    span{
        display: flex;
        align-items: start;
        gap: 20px;
    }
  
`


    export const SideFlightSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #4a4a4a;
    font-size: 13px;
    border-bottom: 1px dashed #4a4a4a;
    padding-bottom: 20px;
        
    div{
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 20px;
    }
    `

export const TotalTrip = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #4a4a4a;
    font-size: 20px;
        
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        & span:nth-child(2){
            font-weight: bold;
            color: #000;
    }
    }
`

export const PromoWrapper = styled.div`
          width: 100%;
          display: flex;
          height: auto;
          flex-direction: column;
          gap: 10px;
          border: 1px solid#0d398420;
          border-radius: 10px;
          background-color: white;

`

export const PromoHeader = styled.div`
            background-color:  #0D3984;
            padding: 10px;
            color: white;
            font-weight: bold;
            display: flex;
            gap: 20px;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
`

export const PromoInput = styled.div`
            width: 100%;
          display: flex;
          padding: 10px;
          gap: 10px;
`

// CONTENT & FORM
export const TripMinContent = styled.div`
      width: 75%;
      display: flex;
      flex-direction: column;
      gap: 20px;

                  
      @media (max-width:768px) {
            width: 100%;
   }

`


export const CustomizeContent =styled.div`
      width: ${({wd})=>wd || "100%"};
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      @media (max-width:768px) {
        padding: 20px;
        width: ${({swd})=>swd || "100%"};
   }
`

export const FlightDetailWrapper =styled.div`
    width: 100%;
    display: flex;
    color: ${({clr})=> clr || 'none'};
    flex-direction: column;
    padding: ${({pd})=> pd || '20px'};
    background-color: ${({bg})=> bg || '#0d398420'};
    border-radius: 10px;
    gap: 20px;

    span{
        display: flex;
        gap: 20px;
        align-items: center;
        
        h3{
            font-weight: bold;
        }

        p{
            font-size: 13px;
            font-weight: bold;
        }
    }
`


export const TripDetailTile = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    span{
            font-size: 20px;
            /* color: #0D3984; */
            cursor: pointer;
        }

        @media (max-width:768px) {
        align-items: start;
   }
`
export const TripDetailBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: ${({mb})=> mb || '0px'} ;
`

export const CustomizeAddonWrapper = styled.div`
    width: 100%;
    flex-direction: column;
`


export const AddonCard = styled.div`
    width: 100;
    display: flex;
    flex-direction: ${({flexDir})=> flexDir || "row"};
    gap: 10px;
    justify-content: space-between;
    background-color: white;
    color: black;
    font-weight: normal;
    font-size: 13px;
    border-radius: 10px;
    /* padding: 10px; */
    line-height: 20px;

    @media (max-width:768px) {

    flex-direction: column;
    align-items: center;
    gap:10px;
}

`

export const TermStyled = styled.button`
    
    background-color: transparent;
    width: 155px;
    cursor: pointer; 
    padding: 0px;
    border: none;
    display: flex;
    justify-content: start;
    align-items: center;
    color: blue;
    gap: 10px;
`

export const TermsDetailHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`


export const AddonIcon = styled.div`
    height: 35px;
    width: 35px;
    background-color: white;
    color: #0D3984;
    border-radius: 50%;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-shadow:  0 0 3px 3px #0D3984;
   

`


export const AddonCardHeader = styled.div`
    display: flex;
    gap: 20px;
    width: 80%;
    font-size: 14px;

    span{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    @media (max-width:768px) {

        width: 100%;
        }
`

export const AddonCardButton= styled.div`
    width: 20%;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: end;
    flex-direction: column;
    @media (max-width:768px) {
        width: 100%;
        }
`
export const TripDetailClass = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        span{
            display: flex;
            align-items: center;
            gap: 5px;

            img{
            height: 20px;
        }
        
        a{
            text-decoration: none;
            color: #0D3984;
        }
    }
`

export const TripDetailTime = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 25px;
    color: black;
    display: flex;
    gap: 10px;
    font-size: 12px;

`

export const TripHour = styled.div`
        span{
            display: flex;
                div{
                display: flex;
                flex-direction: column;
                gap: 20px;

                hr{
                    rotate: 90deg;
                    border: 1px solid  #0D3984; 
                }
            }
        }
`

    
export const CustomizeTripDetail = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-transform: uppercase;

    
    @media (max-width:768px) {
        flex-direction: column;
        gap: 5px;
        word-break: break-all;
        font-size: 13px;
    }
`


export const TripAirport = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  
    div{
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 13px;
    }


    @media (max-width:768px) {
        flex-direction: column;
        align-items: start;


        div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 16px;


        & span:nth-child(1){
            margin-bottom: 0px;
            
        }
    }
}
`


export const TripPassenger = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    div{
        gap: 20px;
        align-items: center;
        display: flex;

        span{
        color: white;
        border-radius: 100%;
        background-color: #0D3984;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px; 
        width: 30px;
     }
    }
  
     span{
        color: white;
        border-radius: 100%;
        background-color: #0D3984;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px; 
        width: 30px;
     }

     p{
        font-size: 13px;
     }
`

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`

export const FormContent = styled.div`
        display: flex;
        gap: 10px;
        width: 100%;

        @media (max-width:768px) {
        flex-direction: column;
        align-items: start;
}  
`


export const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${({spbcBtwn})=> spbcBtwn || 'space-between'};
    align-items: center;

    div{
        display: flex;
        font-size:13px;
        align-items: center;
        gap: 10px;

        a{
            text-decoration: none;
        }
    }

    @media (max-width:768px) {
        gap: 20px;
        flex-direction: column;
        align-items: start;
} 
`