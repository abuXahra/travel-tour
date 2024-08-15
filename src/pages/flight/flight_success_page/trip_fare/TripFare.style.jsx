import styled from "styled-components";

export const TripFareWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;

    div{
        display: flex;
        flex-direction: column;
        gap:10px;
        width: 50%;

        div{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            /* align-items: center; */
            font-size: 12px;
        }

    }


        
    @media (max-width:768px) {

    div{
        width: 100%;
    }
}
`