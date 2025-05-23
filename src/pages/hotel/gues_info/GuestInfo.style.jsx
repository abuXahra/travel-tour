import styled from "styled-components";



export const GuestInfoWrapper  = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #0d398420;
    height: auto;

        
    @media (max-width:768px) {
    
        width: 100%;
        height: auto;

    }
    
`

export const GuestInfoHeader = styled.div`
    height: 300px;
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


export const GuestInfoHeaderItems = styled.div`
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


export const  GuestInfoHeaderTitle = styled.div`
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

export const GuestInfoBody = styled.div`
    width: 100%;
    margin-top: -220px;
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
export const GuestInfoSideBar = styled.div`
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

export const GuestInfoSideContent = styled.div`
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


export const GuestInfoContent =styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      @media (max-width:768px) {
        padding: 20px
   }
`

export const GutestDetailWrapper =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #0d398420;
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


export const GutestDetailTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    div{
            font-size: 20px;
            /* color: #0D3984; */
            cursor: pointer;
        }

        @media (max-width:768px) {

            flex-direction: column;

      & span:nth-child(2){
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 10px;
      }
   }
`
export const GutestDetailBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`


export const GutestDetailClass = styled.div`
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

    @media (max-width:768px) {

flex-direction: column;

span{
     
    font-size: 12px;
     

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
    gap: 20px;

    @media (max-width:768px) {
        flex-direction: column;
    }

`

export const TripHour = styled.div`
        span{
            width: 100%;
            display: flex;
            justify-content: space-between;


            div{
                display: flex;
                flex-direction: column;
                gap: 20px;
             

                hr{
                    rotate: 90deg;
                    border: 1px solid  #0D3984; 
                }
            }


            & div:nth-child(1){
                width: 100px;
                & h5:nth-child(1){
                    /* margin-bottom: 50px; */
                   
                }
            }
        }


        @media (max-width:768px) {
            span{
            flex-direction: column;
            & div:nth-child(1){
                width: 100%;
                flex-direction: row;
                justify-content: space-between;                
            }

            & div:nth-child(2){
                display: none;
            }
        }
        }
`

    



export const TripAirport = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  
    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 16px;
    

        ul li{
            font-size: 12px;
        }

        span{
            display: flex;
            flex-direction: column;
            align-items: start;
        }
    }

    & div:nth-child(2){
        span{
            display: flex;
            gap: 2px;
            align-items: start;

            span{
                font-size: 12px;
            }
        }

    }

    @media (max-width:768px) {
        flex-direction: column;
        align-items: start;
        gap: 10px;

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
    justify-content: ${({spaceBtn})=>spaceBtn || 'space-between' };
    gap:${({gp})=>gp};
    align-items: ${({alItem})=> alItem};
    width: 100%;

    div{
        gap: 10px;
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

export const GuestFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    span{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }

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
    justify-content: space-between;
    align-items: start;

    div{
        display: flex;
        font-size:13px;
        flex-direction: ${({clm})=> clm || 'none'};
        span{
            width: 100%;
            display: flex;
            flex-direction: row;
           gap: 10px;

           input{
                width: 16px;
                height: 16px;
           }
        }

        a{
            text-decoration: none;
            color: blue;
            cursor: pointer;
        }
    }

    @media (max-width:768px) {
        gap: 20px;
        flex-direction: column;
        align-items: start;
} 
`

export const ManzoPoint = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
font-size: 13px;
    input{
        width: 16px;
        height: 16px;
    }

`



export const TermsConditionWrapper =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    gap: 20px;


`



export const TermsConditionTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #60606021;
    border-radius: 10px;
    padding: 10px;
    align-items: start;
    cursor: pointer;
    width: 100%;

        @media (max-width:768px) {

            flex-direction: column;

      & span:nth-child(2){
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 10px;
      }
   }
`


export const TermsConditionBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`



export const TermsConditionClass = styled.div`
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

    @media (max-width:768px) {

flex-direction: column;

span{
     
    font-size: 12px;
     

    }
}
`




export const TermsConditionInner = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 25px;
    color: black;
    display: flex;
    gap: 20px;
    font-size: 12px;
    flex-direction: column;
    transition: ease-in-out;

    span{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    @media (max-width:768px) {
        flex-direction: column;
    }

`
