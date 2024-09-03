import styled from "styled-components";

export const FooterWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 40px;
    border-top:  2px solid #0d398420; 
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 50px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    margin-top: 40px;
    font-size: 12px;

        hr{

          border: 1px solid #0d398420; 
          }
    @media (max-width:768px) {
              gap: 30px;}
`

export const FooterContent =styled.div`
        display: flex;
        width: 100%;
        justify-content: space-between;

        @media (max-width:768px) {
              flex-direction: column;
              width: 100%;
  
}
       `


export const FooterItemWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;

    div{
      width: 100%;
      display: flex;
    }

    
    @media (max-width:768px) {
      width: 100%;    
       flex-direction: column;
       gap: 20px;
       div{
        width: 100%;
       }
}
  
`


export const FooterItems = styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        a{
          color: #303030;
          font-weight: bold;
        }
`

export const FooterSocialWrapper = styled.div`
    
            width: 20%;
            display: flex;
            flex-direction: column;
            /* gap: 40px; */

            & span:nth-child(1){
                display: flex;
                gap: 20px;
                align-items: center;

              div{
               display: flex;
               flex-direction: column;
               height: 50px;
               rotate: 270deg;
                hr{

                    width: 50px;
                }
              }
                
                img{
                    height: 50px;
                    width: 50px;
                    margin-left: -50px;
                }
            }

        
            @media (max-width:768px) {
              margin-top: 50px;
             align-items: center;
             justify-content: center;
              width: 100%;
  
}
        
`



export const SocialIconsWrapper =styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 50px;

            
        @media (max-width:768px) {
              width: 100%;
              align-items: center;
              justify-content: center;
              }
`

export const SocialIconsContent =styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;
   

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            cursor: pointer;
            border-radius: 50%;
            border: 1px solid black;
        }

        
        @media (max-width:768px) {
              width: 100%;
              align-items: center;
              justify-content: center;
  
}
`


export const AwardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  div{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;

    img{
      width: 70px;
      height: 70px;
    }
  }

  @media (max-width:768px) {
  flex-direction: column;
  
}
`


export const CopyWriterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;

  ul{
    display: flex;
    gap: 30px;
    text-decoration: none;
    list-style: none;
    margin-left: 0px;
    padding-left: 0px;

    li a{
          color: #303030;
          font-weight: bold;
        }
  
  }

  span{
    font-size: 12px;
  }

  @media (max-width:768px) {
  flex-direction: column;
  gap: 30px;

  
  ul{
   flex-wrap: wrap;
   gap: 10px;
   align-items: center;
   justify-content: center;
  }
}
`