import styled from "styled-components";



export const FileInputWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  gap: 5px;
  width: 100%;
  p{
    color: red;
  }

  span{
    color: grey;
 font-size: 12px;
  }
`;

export const HiddenFileInput = styled.input.attrs({ type: 'file' })`
  display: none;
`;

export const FileLabel = styled.label`
  border-radius: 5px;
  color: grey;
  padding: 10px 20px;
  border: 1px solid #0d398420; 
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size:16px;

  span{
    font-size: 12px;
  }
`;


export const InputError = styled.div`
    color: red;
    font-size: 12px;
`