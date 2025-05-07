import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 640px; */
  margin: 0 auto;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 12px;
  padding: 10px 40px; /* room for buttons */
    /* Hide scrollbar - works on most browsers */
    scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

export const DateBox = styled.div`
display: flex;
flex-direction: column;
  flex: 0 0 140px;
  padding: 12px;
  border: 2px solid ${(props) => (props.selected ? '#0056b3' : '#ccc')};
  border-radius: 8px;
  text-align: center;
  background-color: ${(props) => (props.selected ? '#007bff' : '#f7f7f7')};
  color: ${(props) => (props.selected ? '#fff' : '#333')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  font-size: 12px;
  cursor: pointer;
`;

export const ArrowButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 1;
  font-size: 12px;
  font-weight: bold;
  &:hover {
    background: #eee;
  }

  ${(props) => (props.left ? 'left: 0;' : 'right: 0;')}
`;