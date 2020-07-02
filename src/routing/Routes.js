import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// for show alert
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Home from '../pages/Home';
import AboutUS from '../pages/AboutUs';
import ShopLeft from '../pages/Shop/ShopLeft';
import shopRight from '../pages/Shop/shopRight';
import ShopDetails from '../pages/Shop/ShopDetails';
import DonationGrid from '../pages/Donation/DonationGrid';
import DonationDetails from '../pages/Donation/DonationDetails';
import Wishlist from '../pages/Wishlist/Wishlist';
import Checkout from '../pages/Checout/Checkout';
import OrderDetails from '../pages/Order/OrderDetails';
import NotFound from '../pages/NotFound/404';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import BlogRight from '../pages/Blog/BlogRight';
import BlogLeft from '../pages/Blog/BlogLeft';
import BlogDetails from '../pages/Blog/BlogDetails';
import StoryGrid from '../pages/Story/StoryGrid';
import StoryDetails from '../pages/Story/StoryDetails';

// set alert time and position
const options = {
  timeout: 2000,
  position: positions.TOP_RIGHT
};

const Routes = () => {
  return (
    <Provider template={AlertTemplate} {...options}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={AboutUS} />
      <Route exact path='/shop-left' component={ShopLeft} />
      <Route exact path='/shop-right' component={shopRight} />
      <Route exact path='/shop-details' component={ShopDetails} />
      <Route exact path='/donation-grid' component={DonationGrid} />
      <Route exact path='/donation-details' component={DonationDetails} />
      <Route exact path='/wishlist' component={Wishlist} />
      <Route exact path='/checkout' component={Checkout} />
      <Route exact path='/order-details' component={OrderDetails} />
      <Route exact path='/404' component={NotFound} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/blog-right' component={BlogRight} />
      <Route exact path='/blog-left' component={BlogLeft} />
      <Route exact path='/blog-details' component={BlogDetails} />
      <Route exact path='/story-grid' component={StoryGrid} />
      <Route exact path='/story-details' component={StoryDetails} />
      













    </Switch>
    </Provider>
  
  );
};

export default Routes;
