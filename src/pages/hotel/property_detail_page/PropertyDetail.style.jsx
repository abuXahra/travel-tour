import styled from "styled-components"



export const DetailWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #0d398420;   
     align-items: center;
`




export const DetailHeader = styled.div`
    height: auto;
    width: 100%;
    background-color: #0D3984;
    display: flex;
    flex-direction: column;



    
    @media (max-width:768px) {
        flex-direction: column;
        width: 100%;
        border-bottom-left-radius: 0%;
        border-bottom-right-radius:0%;
    

    }
`


export const DetailHeaderItems = styled.div`
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
        align-items: start;
    }
`


export const  DetailHeaderTitle = styled.div`
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: flex-start;
        span{
            font-size: 12px;
            display: flex;
            gap:5px;
            align-items: center;
            div{
                color: yellow;
            }
        }
        @media (max-width:768px) {
        width: 100%;

        h2{
            font-size: 20px;
        }
    }
`



export const DetailResultMain = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px ;
    gap: 20px;
    @media (max-width:768px) {
      width: 100%; 
      
    }
`

export const DetailContent = styled.div`
    background-color: white;
    border-radius: 10px;
       width: 100%;
       display: flex;
       padding: 50px;
        flex-direction: column;
        gap: 20px;

       @media (max-width:768px) {
        flex-direction: column;
        gap: 20px; 
        padding: 20px;
    }
`


export const PropertyHeaders = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    font-size: 14px;
    border-bottom: 1px solid #3b3b3b28;
    font-weight: bold;
      /* background-color: white; */
    
    a{
        padding: 10px 50px;
        text-decoration: none;
        color: #313131;
    }

    
    @media (max-width:768px) {
        a{  padding: 10px 5px;}
        justify-content: space-between;
    }
`


export const PropertyHeaderBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: 12px;
`

export const PropertyImagesWrapper = styled.div`
        width: 100%;
        display: flex;
        gap: 20px;

`
export const PropertyImages = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;

      
    @media (max-width:768px) {
        width: 100%;
    }
`

export const ImageTop = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    gap: 10px;

    @media (max-width:768px) {
        flex-direction: column;
    }
`
export const ImageTopLeft = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width:768px) {
        width: 100%;
        display: none;
    }
`

export const LeftImage = styled.span`
        background-image: url(${({propertyImg})=>propertyImg});
        height: 170px;
        width: 100%;
        background-size: cover; /* Scales the background image to cover the entire div */
        background-position: center; /* Centers the background image */
        background-repeat: no-repeat; 
        border-radius: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;   
        
        
        @media (max-width:768px) {
        height: 300px;
    }

    
`

export const ImageTopRight = styled.div`
    width: 700px;
    height: auto;
    background-size: cover; /* Scales the background image to cover the entire div */
    background-position: center; /* Centers the background image */
    background-repeat: no-repeat; 
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; 
    background-image: url(${({propertyImg})=>propertyImg});  

            
    @media (max-width:768px) {
        width: 100%;
        height: 250px;
    }
`

export const ImageBottom = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`

export const BottomImage = styled.div`
        width: 25%;
        height: 150px;
        position: relative;
        color:green;
        background-image: url(${({propertyImg})=>propertyImg});
        background-position: center; /* Centers the background image */
        background-repeat: no-repeat; 
        border-radius: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;  

        div{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #00000055;
            color: white;
            font-size: 14px;
            border-radius: 10px;
        }


        @media (max-width:768px) {
        width: 25%;
        height: 100px; 
    }
`


export const PropertyMapWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 25%;
    background-color: green;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; 
    
    @media (max-width:768px) {
      display: none; 
    }
`


export const PropertyFeature  = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;

    @media (max-width:768px) {
        flex-wrap: wrap; 
    }

`

export const RoomDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    box-shadow: ${({shdw})=> shdw || 'rgba(0, 0, 0, 0.24) 0px 3px 8px'};
    
    h4{
        margin: 20px;
    }
`

export const RoomDetailWrapper = styled.div`
    display: flex;
    width: 100%;

    @media (max-width:768px) {
        
            flex-direction: column;
        
    }

`


export const RoomDetailContent =styled.div`
       display: flex;
       flex-direction: column;
       width: 70%;


       div{
        display:  flex;
        border-top: 0.5px solid #80808019;
        width: 100%;
        font-size: 12px;

          div{
                    flex-direction: column;
                    display: flex;
                    border-right: 1px solid #8080803e;
                    gap: 10px;
                    padding: 20px ;
                }

               & div:nth-child(1){
                width: 60%;
               }
               
               & div:nth-child(2){
                width: 40%;
               }
       }

       @media (max-width:768px) {
        width: 100%;
    }
`

export const RoomTotalAmount = styled.div`
      display: flex;
      width: 30%;
      flex-direction: column;
      border-top: 1px solid #8080803e;
      padding: 20px;
      gap: 10px;

      @media (max-width:768px) {
        width: 100%;
    }
`



export const HotelDescWrapper = styled.div `
    width: 100%;
    display: flex;
    gap: 10px;

    @media (max-width:768px) {
        width: 100%;
        flex-direction: column;
    }
`


export const HotelDesc = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    p{
        line-height: 20px;
    }

    @media (max-width:768px) {
        width: 100%;
    }
`


export const HotelReserve = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color:#F0F6FF;
    border-radius: 5px;
    padding: 20px;

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;


        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-left: 20px;

            span{
                display: flex;
                gap: 10px;
                align-items: center;
            }
        }
    }

    
    @media (max-width:768px) {
        width: 100%;
    }
`


export const RoomAvailabilityWrapper = styled.div`
    display: flex;
    width: 100%;
    border-top: 0.5px solid #0D3984;

    @media (max-width:768px) {
        
            flex-direction: column;
        
    }

`

export const RoomAvailabilityContent =styled.div`
       display: flex;
       flex-direction: column;
       width: 70%;



       div{
        display:  flex;
        border-bottom: 0.5px solid #0D3984;
  
        width: 100%;
        font-size: 12px;

          div{
                    display: flex;
                    border-right: 1px solid #0D3984;;
                

                                
                        & div:nth-child(1){
                            width: 70%;
                            display: flex;
                            border: none;
                            flex-direction: column;
                            border-right: 1px solid #0D3984;
                        }
                        
                        & div:nth-child(2){
                            width: 30%;
                            display: flex;
                            border: none;
                            flex-direction: column;
                       
                        }
                }

               & div:nth-child(1){
                width: 60%;
               }
               
               & div:nth-child(2){
                width: 40%;
                   display: flex;
                
                            flex-direction: column;
               }
       }

       @media (max-width:768px) {
        width: 100%;
    }
`

export const AvailabilitySubHeading = styled.span`
    width: 100%;
    background-color: ${({bgColor})=> bgColor || '#0d3984c6'};
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 14px;
    `

export const RoomAvailableAmount = styled.div`
      display: flex;
      width: 30%;
      flex-direction: column;
      border-top: 1px solid #8080803e;
      gap: 10px;
      border-bottom: 0.5px solid #0D3984;
      

      @media (max-width:768px) {
        width: 100%;
    }
`


export const InnerContent = styled.span`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;

`



export const PropertyPrice = styled.span`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
    padding-left: 10px;

`

export const TravelWrapper =styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    /* margin: 10px; */


    div{
        width: 33%;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: 1px solid #8080803e;
        height: auto;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    & div:nth-child(3){
        span{
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    }

    @media (max-width:768px) {
        flex-direction: column;
        div{
            width: 100%;
        }
    }
`

export const  HotelSurWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 50px;

    div{
        width: 33%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        div{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

            div{
                display: flex;
                justify-content: flex-start;
                flex-direction: row;
                span{
                    font-size: 25px;
                }
            }

            span{
                display: flex;
                gap: 10px;
                justify-content: space-between;
            }

        }
    }


    @media (max-width:768px) {
        flex-direction: column;
        gap: 30px;
        div{
            width: 100%;
        }
    }
`

export const FacilityWrapper = styled.div`
width: 100%;
display: flex;
gap: 50px;

div{
    width: 33%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    div{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

        div{
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            span{
                font-size: 25px;
            }
        }

        span{
            display: flex;
            gap: 25px;
            justify-content: flex-start;
            font-size: 12px;
        }

    }
}


@media (max-width:768px) {
    flex-direction: column;
    gap: 30px;
    div{
        width: 100%;
    }
}
`


export const RuleFaq = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;

    @media (max-width:768px) {
        flex-direction: column;
    
        }
   `

export const RulesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:30px;
    width: 50%;
    @media (max-width:768px) {
                width: 100%;
                gap: 20px;
            }
`
export const RulesItems = styled.div`
    width: 100%;
    border: 1px solid #8080803e;
    border-radius: 10px;
    padding: 20px;


    @media (max-width:768px) {
        width: 100%;
    
        }
`


export const RulesContent =styled.div`
        width: 100%;
        border-bottom: ${({bb})=>bb};
        padding: 20px ;
        display: flex;
        font-size: 12px;
        
        span{
            display: flex;
            flex-direction: column;
    
        }

        & span:nth-child(1){
            width: 30%;
        }

        & span:nth-child(2){
            width: 70%;
        }
`
    

export const FaqWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;


    @media (max-width:768px) {
        flex-direction: column;
    
            width: 100%;
            gap: 20px;
        }
    
`

export const FaqContent = styled.div`
    margin-top:30px;
    width: 100%;
    display: flex;
    flex-direction: column; 
    border: 1px solid #8080803e;
        border-radius: 10px;
        padding: 20px;    

`