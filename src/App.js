import React, { Component } from 'react';
// smooth ui
import {
  Grid,
  Row,
  Col
} from '@smooth-ui/core-sc';

// Custom components
import { 
  Header,
  BookList,
  FilterForm
} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={{src:'https://via.placeholder.com/30x30', alt: 'logo'}} >Library App</Header>
        <Grid>
          <Row>
            <Col xs={4}>
              <BookList title="Books" books={[
                {isbn: '000-000-000', title: 'Libro1', edition: '2018'},
                {isbn: '000-000-001', title: 'Libro2', edition: '2017'},
                {isbn: '000-000-002', title: 'Libro3', edition: '2016'},
              ]} />
            </Col>
            <Col>
              <FilterForm title="Filter books"/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
