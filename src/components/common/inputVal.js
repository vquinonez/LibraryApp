import React from "react";
import {
    Label,
    Input,
    ControlFeedback,
    FormGroup
} from '@smooth-ui/core-sc';

// Utils
import {conditionProperty} from '../../utils'

import styled from 'styled-components';

const ITlabel = styled(Label)`
    font-weight: bold;
`;

function InputVal({title, type = 'text', placeholder, min, onChange = ()=>{} }) {
    return (
        <div>
            <FormGroup>
                {title && <ITlabel htmlFor="form-group-input-valid">{title}</ITlabel>}
                <Input 
                    control 
                    type={type} 
                    placeholder={conditionProperty(placeholder)}
                    min={conditionProperty(min)}
                    onChange={onChange}
                />
                {/* <ControlFeedback >Looks good!</ControlFeedback> */}
            </FormGroup>
        </div>
    );

}

export default InputVal;
