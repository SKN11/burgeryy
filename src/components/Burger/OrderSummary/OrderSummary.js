import React from 'react'
import Aux from '../../../hoc/Auxilliary/Auxilliary';
import Button from '../../../UI/Button/Button';


const OrderSummary = (props) => {

    const billIngredients = Object.keys(props.ingredients).map(
        (igKey)=>{
            return (
            <li key= {igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span>
                : { props.ingredients[igKey] }
            </li>
            );
        }

    );
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>{billIngredients}</ul>
            <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
            <p>Continue To Checkout ?</p>
            <Button clicked={props.purchaseCancelled} btnType={'Danger'}>CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType={'Success'}>CONTINUE</Button>
            
        </Aux>
    );

}



export default OrderSummary;