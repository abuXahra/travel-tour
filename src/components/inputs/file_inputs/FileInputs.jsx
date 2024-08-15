

import React from 'react'
import { FileInputWrapper, FileLabel, HiddenFileInput, InputError } from './FileInputs.style';
import { AiFillPicture } from 'react-icons/ai';



const FileInputs = ({ id, onChange, title, label, error }) => {
  return (
    <FileInputWrapper>
        <HiddenFileInput id={id} onChange={onChange} />
        <span>{title}</span>
        <FileLabel htmlFor={id}><span>{label}</span><AiFillPicture /> </FileLabel>
        {error? <InputError>{title} is required</InputError> : '' }
    </FileInputWrapper>
  );
};

export default FileInputs;
