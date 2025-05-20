import styled from "styled-components";

export const ContentSubHeader = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ bgColor }) => bgColor || "#0d3984cf"};
  padding: 10px 20px 0px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: space-between;

  div {
    display: flex;
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    div {
      width: 100%;
      flex-wrap: wrap;
      gap: ${({ gapItems }) => gapItems || "5px"};
      display: ${({ disp }) => disp || "flex"};
    }
  }
`;
/// #0d3984cf
