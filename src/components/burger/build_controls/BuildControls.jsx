import React   from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './build_control/BuildControl';

const controls = [
    { label : "Salad" , type : "salad"  },
    { label : "Bacon" , type : "bacon"  },
    { label : "Cheese", type : "cheese" },
    { label : "Meat"  , type : "meat"   }
]
const buildControls = ( props ) => {
    return (
        <div className={classes.BuildControls}>
            <p>
                <span>
                    Current Price: 
                </span>
                <b className={classes.price}>
                    {props.price.toFixed(2)}
                </b>
            </p>
            {controls.map( ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    more={() => props.ingredientAdded(ctrl.type)}
                    less={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
            ))}
            <button
                className={classes.OrderButton}
                disabled={! props.can_purchase}
                onClick={props.purchase}>
                ORDER NOW
            </button>
        </div>
    );
}

export default buildControls;