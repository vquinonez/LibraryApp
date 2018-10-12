import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../index.css';

import { Button, Welcome } from '@storybook/react/demo';

import {
  Grid,
  Row,
  Col
} from '@smooth-ui/core-sc';

import {
  Header,
  BookList,
  InputText,
  DropdownList,
  FilterForm,
  SwitchVal
} from '../components/index';

// MOCK DATA

const bookList = [
  {isbn: '000-000-000', title: 'Libro1', edition: '2018'},
  {isbn: '000-000-001', title: 'Libro2', edition: '2017'},
  {isbn: '000-000-002', title: 'Libro3', edition: '2016'},
];
const itemList = [
  {label: 'Item 1', value: 0},
  {label: 'Item 2', value: 1},
  {label: 'Item 3', value: 2},
];

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Common', module)
  .add('header', () => (
    <Header>Title</Header>
  ))
  .add('header with image', () => (
    <Header 
    logo={{src:'https://via.placeholder.com/30x30'}} 
    >Title</Header>
  ))
  .add('Input text', ()  => (
    <Grid fluid>
      <Row>
        <InputText 
        title="Label" 
        placeholder="Texto" 
        onChange={action('onChange')} />
      </Row>
    </Grid>
  ))
  .add('Input text using custom value', ()  => (
    <Grid fluid>
      <Row>
        <InputText 
        title="Label" 
        customValue="value"
        placeholder="Texto" 
        onChange={action('onChange')} />
      </Row>
    </Grid>
  ))
  .add('Input Number', ()  => (
    <Grid fluid>
      <Row>
        <InputText 
        type="number" 
        title="Label" 
        placeholder="number" 
        min="0" 
        onChange={action('onChange')}/>
      </Row>
    </Grid>
  ))
  .add('DropDown List', ()  => (
    <Grid fluid>
      <Row>
        <DropdownList 
        title="Label" 
        placeholder="dropdown" 
        options={itemList} 
        onChange={action('onChange')}/>
      </Row>
    </Grid>
  ))
  .add('Switch', ()  => (
    <Grid fluid>
      <Row>
        <SwitchVal 
        title="Label" 
        onLabel="ON" 
        offLabel="OFF"
        onChange={action('onChange')}/>
      </Row>
    </Grid>
  ));

storiesOf('List', module)
  .add('BookList', () => (
    <Grid fluid>
      <Row>
        <Col xs={3}>
          <BookList 
          title="Titulo" 
          onSelectedItem={action('selected')} 
          books={bookList}/>
          </Col>
      </Row>
    </Grid>
  ))
  .add('BookList without title', () => (
    <Grid fluid>
      <Row>
        <Col xs={3}>
          <BookList 
          onSelectedItem={action('selected')} 
          books={bookList}/>
        </Col>
      </Row>
    </Grid>
  ));

storiesOf('Form', module)
  .add('Filter Form', () => (
    <Grid>
      <Row>
        <Col xs={8}>
          <FilterForm 
          title="Filter books"/>
        </Col>
      </Row>
    </Grid>
  ));
