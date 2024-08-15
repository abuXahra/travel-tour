import styled from "styled-components"

export const ResultCard = styled.div`
            width: 100%;
            height: auto;
           box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
           height: auto;
           display: flex;
           position: relative;
           /* flex-direction: column; */
           border-radius: 10px;
           background-color: white;




    @media (max-width:768px) {
        flex-direction: column;
        /* gap: 20px;  */
    }

`


export const ResultCardImage = styled.div`
    width: 300px;  /* Set the desired width */
    height: auto; /* Set the desired height */
    overflow: hidden;
    position: relative;
    background-image: url(${({bgImage})=>bgImage});
    background-size: cover; /* Scales the background image to cover the entire div */
    background-position: center; /* Centers the background image */
    background-repeat: no-repeat; 
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;    
  

    span{
    position: absolute;
    background-color: white;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    right:10px;
    top: 10px;
    font-size: 18px;
    color: ${({favoriteColor})=>favoriteColor};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
  }


    @media (max-width:768px) {
        height: 300px;
        width: 100%;    
    }



`


export const ResultCardBody = styled.div`
    width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 10px;

    @media (max-width:768px) {
        width: 100%;
    }

`


export const ResultContent = styled.div`
       width: 100%;
       display: flex;
       justify-content: space-between;
       gap: 20px;

       h2{
            color: blue;     
       }
    
`

export const LocationContainer = styled.div`
    display: flex;
    gap: 10px;
     font-size: 12px;
`

export const ResultContentLeft = styled.div`
    width: 50%;
    display:flex;
    flex-direction: column;
    gap: 8px;
    justify-content: start;
    align-items: start;
    color: #333333;
    font-size: 12px;
    span{


        
        div{
            border: 1px solid #8080801f;
            padding:5px;
        }
    }
        
        a{
            color: blue;
        }
    
`
export const ResultContentRight = styled.div`
    width: 50%;
    display:flex;
    flex-direction: column;
    gap: 8px;
    justify-content: end;
    align-items: end;
    color: #333333;
    font-size: 12px;
    text-align: right;
  p{
    text-align: right;
  }
    span{
        font-size: 12px;
        div{
            border: 1px solid #8080801f;
            padding:5px;
        }
    }
`

export const ResultState = styled.div`
    display: flex;
    gap: 10px;

span{
    display: flex;
    flex-direction: column;
}
    
    div{
        border-radius: 5px;
        border-bottom-left-radius: 0px;
        background-color: #0D3984;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        font-size: 10px;
    }
`

export const ButtonStyle = styled.button`
background-color: #FF6805;
color: white;
border: none;
border-top-left-radius: 10px;
border-bottom-right-radius: 10px;
padding: 10px;
display: ${({displayButton})=>displayButton || 'flex'};
cursor: pointer;
gap: 10px;
`