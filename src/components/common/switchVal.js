import React from "react";
import {
    Label,
    Select,
    ControlFeedback,
    FormGroup,
    Switch,
} from '@smooth-ui/core-sc';

import {conditionProperty} from '../../utils'

import styled from 'styled-components';

const Slabel = styled(Label)`
    display: block
    font-weight: bold;
`;

function SwitchVal({title, onLabel, offLabel, onChange = ()=>{}}) {
    return (
        <div>
            <FormGroup>
                {title && <Slabel htmlFor="form-group-input-valid">{title}</Slabel>}
                <Switch 
                    control
                    labeled = { conditionProperty(typeof onLabel !== 'undefined' && typeof offLabel !== 'undefined')}
                    onLabel = { conditionProperty(onLabel) }
                    offLabel = { conditionProperty(offLabel) }
                    onChange = {onChange}
                />
                {/* <ControlFeedback >Looks good!</ControlFeedback> */}
            </FormGroup>
        </div>
    );

}

export default SwitchVal;
