import React,{Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {withRouter,Route} from 'react-router-dom'
import ContactData from '../Checkout/ContactData/ContactData'


class Checkout extends Component {

    state={
        ingredients:null,
        price:0
    }
    componentWillMount(){
        console.log(this.props);
        const queryParam = new URLSearchParams(this.props.location.search);
        console.log(queryParam);
        const ingredient = {};
        let price=0;
        for(let param of  queryParam.entries())
        {   
            if(param[0] === 'price')
            {
                price=param[1];
            }
            else{
            ingredient[param[0]] = parseInt(param[1]);
            }
        }
        this.setState({ingredients:ingredient,price:price});
    }

    clickCancelHandler = ()=>{
            this.props.history.goBack();

    }

    clickContinueHandler = ()=>{

this.props.history.replace('/checkout/contact-data')
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                onClickedCancel={this.clickCancelHandler}
                onClickedContinue={this.clickContinueHandler}
                ingredients={this.state.ingredients}/>
                <Route 
                 path={this.props.match.path + '/contact-data'} 
                render={()=>(<ContactData ingredients={this.state.ingredients} price={this.state.price}/>)}></Route>
            </div>
        );
    }

}


export default withRouter(Checkout);