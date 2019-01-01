import React   from 'react';
import classes from './Burger.module.css';

import BurgerIngredient from './burger_ingredient/BurgerIngredient';

const burger = ( props ) => {
    let ings = Object.keys( props.ingredients )
        .map( key => {
            return [...Array(props.ingredients[key])].map( (_, i) => {
                return <BurgerIngredient key={key + i} type={key} />
            });
        })
        .reduce(( arr, el ) => {
            return arr.concat( el );
        }, []);

    if( ings.length === 0 ) {
        ings = (<p>
                Please add ingredients
            </p>
        );
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ings}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;