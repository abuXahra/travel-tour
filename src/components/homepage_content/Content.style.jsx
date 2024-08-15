import styled from "styled-components";


export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    color: #161616;

    
@media (max-width:768px) {
    height: auto;
    gap: 50px;
}

`


export const ContentInner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
   
    h3{
        font-size: 40px;
        color: #0D3984;
    }
`

export const PackageSection = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;

    @media (max-width:768px) {
        flex-direction: column;
}
`


export const PackageContent = styled.span`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
`


export const PackageImage = styled.div`
  width: 100%;  /* Set the desired width */
  height: 200px;
  overflow: hidden;
  position: relative;
  background-image: url(${({bgImage})=>bgImage});
  background-size:cover; /* Scales the background image to cover the entire div */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat; 
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  @media (max-width:768px) {
    height: 300px;
  
    }

`

export const PackageBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 20px;
    background-color: white;
    padding: 20px;


    p{
        font-size: 13px;
    }


    hr{
        border: 1px solid #0d398420; 
    }

    span{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`