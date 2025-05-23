import styled from "styled-components";

export const ResultSidebar = styled.div` //not in use currently
    width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    gap: 20px;
    margin-top: 20px;


    @media (max-width:768px) {
        display: none;
    }
`

export const SidebarItemWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    gap: 10px;
    padding: 10px;
    background-color: white;
    border: 1px solid #0D3984;
    span{
        font-weight: bold;
        font-size: 14px;
        color: #0D3984;
    }
`

export const SidebarItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
`

export const AirlineItems = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 5px;
    &:hover{
            color: #0D3984;
        }
`

export const AirlineTitle = styled.div`
 display: flex;
 gap:  10px;

 input {
    height: 16px;
    width: 16px;
    appearance: none;
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:checked {
      background-color: #1100ff;
      border-color: #1100ff;
    }

    &:checked::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 3px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
}
 p{
    font-size: 12px;
} 
`

export const AirlinePrice = styled.div`
        font-weight:200;
        font-size: 11px;
`

export const ShowAll = styled.div`
    display: flex;
    align-self: flex-end;
    align-items: center;
    color: blue;
    font-size: 13px;
    font-weight: bold;
    gap: 5px;
    cursor: pointer;
`

export const IconWrapper = styled.div`
     font-weight: bold;
     font-size: ${({fontSize}) => fontSize || '20px'};
     color: #0D3984;
`


// departure section style
export const DepartureItems = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 5px;
    border-radius: 10px;
    &:hover{
        background-color: #0d398413;
        }
`

export const DepartureContent = styled.div`
     display: flex;
     gap:  10px;
     
     input {
    height: 16px;
    width: 16px;
    appearance: none;
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:checked {
      background-color: #1100ff;
      border-color: #1100ff;
    }

    &:checked::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 3px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
}
     
        p{
            font-size: 11px;

        } 

        b{
            font-size: 12px;  
        }
     
`



// Return section style
export const ReturnItems = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 5px;
    border-radius: 10px;
    &:hover{
        background-color: #0d398413;
        }
`

export const ReturnContent = styled.div`
     display: flex;
     gap:  10px;

     input {
    height: 16px;
    width: 16px;
    appearance: none;
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:checked {
      background-color: #1100ff;
      border-color: #1100ff;
    }

    &:checked::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 3px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
}
    
        p{
            font-size: 12px;

        } 

        b{
            font-size: 12px;  
        }
     
`




// Stops section style
export const StopItems = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 5px;
    border-radius: 10px;
    &:hover{
        background-color: #0d398413;
        }
`

export const StopContent = styled.div`
     display: flex;
     gap:  10px;

     input {
    height: 16px;
    width: 16px;
    appearance: none;
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:checked {
      background-color: #1100ff;
      border-color: #1100ff;
    }

    &:checked::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 3px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
}
    
        p{
            font-size: 12px;

        } 

        b{
            font-size: 12px;  
        }
     
`
