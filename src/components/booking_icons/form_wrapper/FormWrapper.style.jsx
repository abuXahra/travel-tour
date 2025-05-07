import styled from 'styled-components'

export const FormWrapperContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${({bgColor})=>bgColor || '#0d3984cf'}; //
    padding: 5px;
    border-radius: 10px;
    border-top-left-radius: ${({tLeftRadius}) => tLeftRadius || '0px'};
    border-top-right-radius: ${({tRightRadius}) => tRightRadius || '0px'};

@media (max-width:768px) {
    padding: 20px;
}
`

export const TravelActivities = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
`
