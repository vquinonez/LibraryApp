import React from "react";
import {
  Grid,
  Row,
  Col
} from '@smooth-ui/core-sc';
import styled from 'styled-components';

const HGrid = styled(Grid)`
  background: #343434;
  color: #f3f3f3;
  box-sizing: border-box;
`
const HRow = styled(Row)`
  align-items: center;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
`

const Hh1= styled.h1`
  display: inline;
  margin: 0;
  margin-left: 0.5rem;
`;

function Header( {logo, children} ) {
  return (
    <HGrid fluid>
      <HRow>
        <Col>
          {
            (logo && logo.src) && <img src={logo.src} className="App-logo" alt={logo.alt && logo.alt} /> 
          }
          <Hh1>{children}</Hh1>
        </Col>
      </HRow>
    </HGrid>
  );

}

export default Header;
