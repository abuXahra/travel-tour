import styled from "styled-components";



export const TaxiDetailWrapper  = styled.div`
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

export const TaxiDetailHeader = styled.div`
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


export const TaxiDetailHeaderItems = styled.div`
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


export const  TaxiDetailHeaderTitle = styled.div`
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

export const TaxiDetailBody = styled.div`
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
export const TaxiDetailSideBar = styled.div`
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

export const TaxiDetailSideContent = styled.div`
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


export const TaxiDetailContent =styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: white;
      padding: 30px;
      border-radius: 10px;
      @media (max-width:768px) {
        padding: 20px
   }
`

export const TaxiDetailWrapperb =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #0d398420;
    border-radius: 10px;
    padding: 20px;
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
        align-items: start;
   }
`
export const TripDetailBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
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

export const TripDetailContainer = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    color: black;
    display: flex;
    gap: 20px;

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


            & div:nth-child(1){
                & h4:nth-child(1){
                    margin-bottom: 50px;
                }
            }
        }
`

    



export const TripAirport = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
  
    div{
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 16px;


        & span:nth-child(1){
            margin-bottom: 30px;
            
        }
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
    justify-content: space-between;


    div{
        width: 100%;
        display: flex;
        font-size:13px;
        align-items: start;
        gap: 10px;
       
        span{
           
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: start;
            gap: 10px;
        }
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


export const  ChargesWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;

    div{
        width: 50%;
        display: flex;
        border: 1px solid #0d398420; 
        border-radius: 10px;
        padding: 40px;
        flex-direction: column;
        gap: 20px;

        ul{
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: 12px;
        }
    }


    
    @media (max-width:768px) {
        gap: 20px;
        flex-direction: column;
        align-items: start;
        div{
            width: 100%;
        }
} 
`