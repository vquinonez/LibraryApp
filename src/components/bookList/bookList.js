import React from "react";
import {
  Row,
  Col
} from '@smooth-ui/core-sc';

import BookItem from './bookItem';

import styled from 'styled-components';

const List = styled(Col)`
`;
const BLul = styled.ul`
    padding: 0 1rem;
    border: 1px solid #343434;
    max-height: 43rem;
    overflow-y: auto;
    border-radius: 1rem;
`;

function BookList( {books = [], title, onSelectedItem = ()=>{}} ) {
  return (
    <div>
        <Col xs={12}>
          {title && <h3>{title}</h3>}
        </Col>
        <List xs={12}>
            <BLul>
                {
                    books.map((element, key) => 
                        <BookItem key={key} onClick={onSelectedItem.bind(this, element.isbn)}>
                            {element.title}, {element.edition}
                        </BookItem>
                    )
                }
            </BLul>
        </List>
    </div>
  );

}

export default BookList;
