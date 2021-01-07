import React,{Component} from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENTS_PRICE = {
    salad:0.5,
    cheese:1.2,
    meat:2.2,
    bacon:3.2
} 

class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        purchaseable:false,
        purchasing:false,
        totalPrice:4,
        loading:false
    }

    updatePurchasable = (ingredients) =>{
        /*const ingredients = {...this.state.ingredients};
*/
        const sum = Object.keys(ingredients)
        .map( igKey =>  ingredients[igKey])
        .reduce((sum,el)=> {
            return sum+el;
        },0);

        this.setState({purchaseable : sum>0});
    }

    addIngredientsHandler = (type)=>{
        const oldCOunt = this.state.ingredients[type];
        const newCount = oldCOunt+1;//ingrToBeAdded = ingrToBeAdded+1;
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = newCount;

        const currentTotalPrice = this.state.totalPrice;
        const TotalPrice = currentTotalPrice + INGREDIENTS_PRICE[type];
        
         this.setState({
             ingredients:updatedIngredients,
             totalPrice:TotalPrice
         });

         this.updatePurchasable(updatedIngredients);
               
    }

    removeIngredientsHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0)
        {
            return;
        }
        const newCount = oldCount-1;//ingrToBeAdded = ingrToBeAdded+1;
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = newCount;

        const currentTotalPrice = this.state.totalPrice;
        const TotalPrice = currentTotalPrice - INGREDIENTS_PRICE[type];
        

         this.setState({
             ingredients:updatedIngredients,
             totalPrice:TotalPrice
         });

         this.updatePurchasable(updatedIngredients);
               
    }
    
    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    purchaseCloseHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () => {
        //alert('Order Booked Plz COntinue')
        this.setState({loading:true});

        const order = {
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name:'Sky',
                add:'home',
                country:'india',
                email:'sky@gmail.com',
                deliveryMethod:'fast'
            }
        }
        axios.post('/orders',order)
        .then(response =>{ 
            this.setState({loading:false});
            console.log(response);
        })
        .catch(error => {
            console.log(error)
            this.setState({loading:false})
        });
    }

    render(){
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo)
        {
            disabledInfo[key] = ( disabledInfo[key] <=0) ;
        }

        let orderInfo =  <OrderSummary ingredients={this.state.ingredients} 
        purchaseCancelled = {this.purchaseCloseHandler}
        purchaseContinued = {this.purchaseContinueHandler}
        price = {this.state.totalPrice}/>

        if(this.state.loading)
        {
           orderInfo =  <Spinner/> ;
        }



        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed = {this.purchaseCloseHandler}>
                    {orderInfo}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls disabled={disabledInfo}
                ingredientsToAdd={this.addIngredientsHandler}
                  ingredientsToRemove={this.removeIngredientsHandler}
                  price={this.state.totalPrice}
                  purchaseable={this.state.purchaseable}
                  purchase={this.purchaseHandler}/>
            </Aux>
        );
    }

}


export default withErrorHandler(BurgerBuilder,axios);
//export default BurgerBuilder;