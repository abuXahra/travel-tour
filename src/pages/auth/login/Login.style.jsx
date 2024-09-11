import styled from "styled-components";


export const AuthWrapper = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0d398423;
    height: 100vh;
`


export const AuthFormWrapper = styled.form`
    width: 40%;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-radius: 20px;

    @media (max-width:768px) {
        width: 80%;
  
    }
`


export const CallToAction = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    font-size: 12px;
    div{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    a{
        color: blue;
        text-decoration: none;
    }
`