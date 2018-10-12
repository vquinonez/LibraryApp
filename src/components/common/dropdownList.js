import React from "react";
import {
    Label,
    Select,
    ControlFeedback,
    FormGroup
} from '@smooth-ui/core-sc';

import styled from 'styled-components';

const DDlabel = styled(Label)`
    display: block
    font-weight: bold;
`;

const DDSelect = styled.div`
    display: inline-block;
`;

function DropdownList({title, placeholder, options = [], onChange = ()=>{} }) {
    return (
        <div>
            <FormGroup>
                {title && <DDlabel htmlFor="form-group-input-valid">{title}</DDlabel>}
                <Select 
                    control
                    placeholder={placeholder} 
                    options={options}
                    onChange={onChange}
                />
                {/* <ControlFeedback >Looks good!</ControlFeedback> */}
            </FormGroup>
        </div>
    );

}

export default DropdownList;
