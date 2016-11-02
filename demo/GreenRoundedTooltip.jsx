import React from 'react';
import {Tooltip} from '../src/index';

const GreenRoundedTooltip = () => {
    return (
        <Tooltip
            background="green"
            color="#000"
            content={
                [
                    'This repo is hosted on ',
                    <a href="https://github.com" key="githublink" target="_blank">Github</a>,
                ]
            }
            radius="10px"
        >
            <span style={{fontSize:'5em'}}>&#10031;</span>
        </Tooltip>
    );
}

export default GreenRoundedTooltip;
