import styled from "styled-components";




export const HotelInputContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;

    @media (max-width:768px) {
       flex-direction: column;
       align-items: start
    }

`


export const HotelFormSectionTitle = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    h1{
         font-size: 40px;
    }
`

export const HotelFormSectionContent = styled.div`
    width: 100%;
    display: flex;
    /* gap: 10px; */
    flex-direction: column;   
`


export const HotelInputAndDropDown = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    @media (max-width:768px) {
        width: 100%;
       flex-direction: column;
       align-items: start
    }
`

export const HotelInputWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 10px;
    /* background-color: #0d398428; */

    input{
        width: 100%;
        padding: 21px;
        border-radius: 10px;
        font-size: 15px;
        font-weight: bold;
        color: black;
        text-transform:capitalize;
        background-color: #0d398428;
        border: none;

        &:focus {
        outline: 2px solid #0D3984;
    }
    }

    span{
        position: absolute;
        top: 20px;
        right: 20px;
        bottom: 10px;
        font-size: 18px;
        color: #292929;

    }

    @media (max-width:768px) {
        input{ font-size: 14px;}
    }

    
`



export const HotelDepartWrapper = styled.div`
        width: 100%;
        display: flex;
        gap: ${({inputGap})=> inputGap || '10px'};
        @media (max-width:768px) {
        
        flex-direction: column;
        gap: 10px;
    }
`




export const HotelDepatWrapContent = styled.div`
         width: ${({contWidth})=>contWidth || "100%"};
        color: grey;
        position: relative;


        input{
            width: 100%;
            padding: 30px 10px 10px 10px;
            border-radius: 10px;
            font-size: 15px;
            background-color: #0d398428;
            border: none;

            &:focus {
            outline: 2px solid #0D3984;

      
         }

    }
`

export const Label = styled.label`
            position: absolute;
            top: 10px;
            left: 10px;    
`


export const HotelPassengerWrapper  = styled.div`
       width: 100%;
       display: flex;
       flex-direction: column;
`

export const HotelPassengerClass = styled.div`
            width: 100%;
            padding: 14px 10px 10px 10px;
            border-radius: 10px;
            font-size: 15px;
            background-color: #0d398428;
            /* outline: 2px solid #0D3984; */
    

            div{
                color: black
            }
            
`


export const HotelPassengerContent = styled.div`
    width: 100%;
    position: relative;
`

export const PassengerWrapper = styled.div`
        width: 100%;
        height: auto;
        border-radius: 10px;
        font-size: 13px;
        background-color: white;
        position: absolute;
        margin-top: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        z-index: 9999;

`


export const HotelForm = styled.div` //////////changer from form to div
    width: 100%;
    flex-direction: column;
    display: flex;
    color: black;
    gap: ${({formGap})=>formGap || '10px'};
`
