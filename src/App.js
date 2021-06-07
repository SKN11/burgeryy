import React,{Component} from 'react'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/burgerbuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import {BrowserRouter,Route} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Orders from './containers/Orders/Orders'
class App extends Component {
  render(){
  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Switch>
        <Route path='/checkout' component={Checkout}></Route>
        <Route path='/orders' component={Orders}></Route>
        <Route path='/' exact component={BurgerBuilder}></Route>
       </Switch>
      </Layout>
      </BrowserRouter>
    </div>
  );
}
}
export default App;
