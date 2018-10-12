import React, { Component } from 'react';
// smooth ui
import {
  Col
} from '@smooth-ui/core-sc';

// Form properties
import InputVal from '../common/inputVal';
import DropdownList from '../common/dropdownList';
import SwitchVal from '../common/switchVal';

import styled from 'styled-components';

const FFCol = styled(Col)`
    display: inline-block;
    box-sizing: border-box;
`;

class FilterForm extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div>
        <FFCol xs={12}>
            <h2>{this.props.title}</h2>
        </FFCol>
        <FFCol xs={12}>
            <InputVal title="Title" />
        </FFCol>
        <FFCol xs={6}>
            <InputVal title="Author" />
        </FFCol>
        <FFCol xs={6}>
            <InputVal title="ISBN" />
        </FFCol>
        <FFCol xs={4}>
            <DropdownList 
            title="Editorial" 
            placeholder="Select one" 
            options={[
                {label: 'Item 1', value: 0},
                {label: 'Item 2', value: 1},
                {label: 'Item 3', value: 2},
            ]} />
        </FFCol>
        <FFCol xs={2} omd={4}>
            <InputVal title="Edition" type="number" min="1000" placeholder="1000" />
        </FFCol>
        <FFCol xs={2}>
            <SwitchVal title="Latest edition" />
        </FFCol>
        <FFCol xs={4}>
            <DropdownList 
            title="Nationality" 
            placeholder="Select one" 
            options={[
                {label: 'Item 1', value: 0},
                {label: 'Item 2', value: 1},
                {label: 'Item 3', value: 2},
            ]} />
        </FFCol>
        <FFCol xs={4}>
            <DropdownList 
            title="Language" 
            placeholder="Select one" 
            options={[
                {label: 'Item 1', value: 0},
                {label: 'Item 2', value: 1},
                {label: 'Item 3', value: 2},
            ]} />
        </FFCol>
      </div>
    );
  }
}

export default FilterForm;
