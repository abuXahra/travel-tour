import { FaRegComments } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import styled from "styled-components";


export const QtnWrapper = styled.span`
    width: 100%;
    display: flex;
    color: #2b2b2b;
    justify-content: space-between;
    border-bottom: ${({bb})=>bb};
    padding: 15px 0px;
    cursor: pointer;
    gap: 30px;


    p{
        font-size: 13px;
    }
`
