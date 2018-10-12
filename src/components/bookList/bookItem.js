import React from "react";
import styled from 'styled-components';

const BIitem = styled.li`
    list-style: none;
    cursor: pointer;
    padding: 0.1rem
    transition: background 0.2s;
    &:hover {
        background: #cfcfcf61;
        transition: background 0.2s;
    }
`;

function BookItem( { children, onClick = ()=>{} } ) {
  return (
    <BIitem onClick={onClick}>
        {children}
    </BIitem>
  );

}

export default BookItem;
