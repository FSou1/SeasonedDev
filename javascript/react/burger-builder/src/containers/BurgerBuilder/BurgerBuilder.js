import { useEffect, useState } from 'react';

import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.1,
    bacon: 0.7
};

const BurgerBuilder = () => {
    const [totalPrice, setTotalPrice] = useState(4.0);

    const [ingredients, setIngredients] = useState({
        'cheese': 0,
        'salad': 0,
        'bacon': 0,
        'meat': 0
    });

    const [purchasable, setPurchasable] = useState(false);
    const [purchasing, setPurchasing] = useState(false);

    const disabledInfo = {
        ...ingredients
    };
    for (const key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    const addIngredientHandler = (type) => {
        const updatedCount = ingredients[type] + 1;

        const updatedIngredients = {
            ...ingredients,
            [type]: updatedCount
        };
        setIngredients(updatedIngredients);

        setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
    };

    const removeIngredientHandler = (type) => {
        const updatedCount = ingredients[type] - 1;
        if (updatedCount < 0) {
            return;
        }

        const updatedIngredients = {
            ...ingredients,
            [type]: updatedCount
        };

        setIngredients(updatedIngredients);

        setTotalPrice(totalPrice - INGREDIENT_PRICES[type]);
    };

    const purchaseHandler = () => {
        setPurchasing(true);
    };

    const purchaseContinueHandler = () => {
        alert('You continue!');
    };

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    useEffect(() => {
        const sum = Object.values(ingredients)
            .reduce((a, b) => a + b);

        setPurchasable(sum > 0)
    }, [ingredients]);

    return (
        <Aux>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                <OrderSummary
                    ingredients={ingredients}
                    continueClicked={purchaseContinueHandler}
                    cancelClicked={purchaseCancelHandler}
                    totalPrice={totalPrice} />
            </Modal>
            <Burger ingredients={ingredients} />
            <BuildControls
                totalPrice={totalPrice}
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                purchasable={purchasable}
                ordered={purchaseHandler}
                disabled={disabledInfo} />
        </Aux>
    );
}

export default BurgerBuilder;