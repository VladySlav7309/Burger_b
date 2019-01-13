import React from 'react';

const orderSummary = (props) => {
    const ingSummary = Object.keys( props.ingredients ).map( key => {
        return (
            <li key={key}>
                <span style={{textTransform : 'capitilize'}}>
                    {key}
                </span>
                : {props.ingredients[key]}
            </li>
        )
    });

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with:</p>
            <ul>
                {ingSummary}
            </ul>
            <p>
                Continue to Checkout?
            </p>
        </>
    )
}

export default orderSummary;