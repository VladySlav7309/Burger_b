import React, { Component } from 'react';

import Burger        from '../components/burger/Burger';
import BuildControls from '../components/burger/build_controls/BuildControls';
import Modal         from '../components/UI/Modal';
import OrderSummary  from '../components/burger/order_summary/OrderSummary';

const INGREDIENT_PRICES = {
    salad  : 0.5,
    cheese : 0.4,
    meat   : 1.3,
    bacon  : 0.7
}

class BurgerBuilder extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            ingredients : {
                salad  : 0,
                bacon  : 0,
                cheese : 0,
                meat   : 0
            },
            total_price  : 4,
            can_purchase : false,
            purchasing   : false
        }
    }

    updatePurchaseState () {
        let can_purchase = false;
        for( let key in this.state.ingredients ) {
            if( this.state.ingredients[key] > 0 ) {
                can_purchase = true;
            }
        }

        this.setState({ can_purchase : can_purchase });
    }

    purchaseCancel = () => {
        this.setState({ purchasing : false });
    }

    purchaseStart = () => {
        this.setState({ purchasing : true });
    }

    addIngredientHandler = type => {
        this.setState({
                total_price : this.state.total_price + INGREDIENT_PRICES[type],
                ingredients : {
                    ...this.state.ingredients,
                    [type] : this.state.ingredients[type] + 1
                }
            },
            this.updatePurchaseState
        );
    }

    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        if( oldCount <= 0 ) {
            return;
        }

        const newPrice = this.state.total_price - INGREDIENT_PRICES[type];
        const updatedIngredients = {
            ...this.state.ingredients,
            [type] : oldCount - 1
        };

        this.setState({
                total_price : newPrice,
                ingredients : updatedIngredients
            },
            this.updatePurchaseState
        );
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.total_price}
                    disabled={disabledInfo}
                    can_purchase={this.state.can_purchase}
                    purchase={this.purchaseStart}/>
            </>
        )
    }
}

export default BurgerBuilder;