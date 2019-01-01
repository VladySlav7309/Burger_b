import React from 'react';

const buildControl = ( props ) => {
    return (
        <div>
            <div>{props.label}</div>
            <button>Less</button>
        </div>
    )
}

export default buildControl;