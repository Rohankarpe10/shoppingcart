//route paths for navigating from one compononent to another based on user input


import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Products from './products';
import ProductDetails from './productdetails';
import Cart from './cart';
import Login from './login';
import Register from './register';
class Router extends Component {
    render() {
      return (          
        <Switch>
          <Route exact path="/" component={Products} />
         <Route exact path="/productdetails/:id" component={props => <ProductDetails id={props.match.params.id}/>}/>
         <Route exact path="/cart" component={Cart}/>
         <Route exact path="/register" component={Register}/>
         <Route exact path="/login" component={Login}/>
         
        </Switch>
      );
    }
}
export default Router;