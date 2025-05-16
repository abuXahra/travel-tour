import styled from "styled-components";

export const FormWrapperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ bgColor }) => bgColor || "#0d3984cf"}; //
  padding: 5px;
  border-radius: 10px;
  border-top-left-radius: ${({ tLeftRadius }) => tLeftRadius || "0px"};
  border-top-right-radius: ${({ tRightRadius }) => tRightRadius || "0px"};
  //   border-bottom: 15px solid rgb(13, 57, 132);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
/// #ff6500c4
export const TravelActivities = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;
