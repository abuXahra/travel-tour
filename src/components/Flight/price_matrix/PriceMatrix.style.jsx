import styled from "styled-components";

// export const TableWrapper = styled.div`
//   width: 100%;
//   position: relative;
//   background-color: #ffffff;
//   border-radius: 10px;
//   border: 1px solid #0D3984;
//   /* padding: 10px; */
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

export const TableWrapper = styled.div`
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "fit-content")};
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #0D3984;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


export const TableContainer = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;


const CELL_WIDTH = '120px';

export const StickyCol = styled.div`
  position: sticky;
  left: 0;
  z-index: 2;
  /* background-color: #fff;/ */
  background-color: #0d398413;
  width: ${CELL_WIDTH}; /* Match column width */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;

    th, td {
      /* border: 1px solid #ddd; */
      border: none;
      padding: 10px;
      width: ${CELL_WIDTH};
      min-width: ${CELL_WIDTH};
      max-width: ${CELL_WIDTH};
      height: 50px;
      font-size: 12px;
      text-align: center;
      vertical-align: middle;
      font-weight: bold;
    }
  }
`;


export const ScrollableContent = styled.div`
  overflow-x: auto;
  display: inline-block;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;



export const TableStyle = styled.table`
  border-collapse: collapse;
  table-layout: fixed;

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    width: ${CELL_WIDTH};
    min-width: ${CELL_WIDTH};
    max-width: ${CELL_WIDTH};
    height: 50px;
    font-size: 12px;
    text-align: center;
    vertical-align: middle;

    img {
      width: 20px;
    }
  }

  tr:nth-child(even) {
    background-color: #0d398413;
  }

  td{
    cursor: pointer;
   
   &:hover{
      color:  #0D3984;
      cursor: pointer;
      font-weight: bold;
    }
  }
`;




export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 10;
  background-color: #fff;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
  font-size: 10px;
  color: #FF6805;

  &:first-of-type {
    left: 2px;
  }

  &:last-of-type {
    right: 2px;
  }
`;
