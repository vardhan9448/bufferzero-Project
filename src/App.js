import React, { useState } from 'react';
import {
 BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

// eslint-disable-next-line import/no-named-as-default
// import Weather from './Components/Weather';
import routs from './Components/Pages/Routs';
import NotFound from './Components/Pages/NotFound';
import Header from './Components/Pages/Header';
import CartProvider from './Components/Pages/Context/cartContext';
import SelectedItems from './Components/Pages/Cart/SelectedItems';

export default function app() {
  const token = sessionStorage.getItem('token');
  const [isLogin, setIsLogin] = useState(!!token);
   
  return (
      <BrowserRouter>
          <CartProvider>
              <Header routs={routs} />
              <Switch>
                  {/* {routs.map(({ component: Component, ...rest }) => (
                  <Route
                    key={rest.path}
                    {...rest}
                    render={(props) => {
                      const authe = true;
                      if (authe || !rest.isAuthe) return <Component {...props} />;
                      return <Redirect to={{ pathname: '/login' }} />;
                  }}
                  />
))}
              <Route component={NotFound} /> */}
             
                  {isLogin ? routs.filter((e) => e.isAuthe).map(({ component: Component, ...rest }) => (
               
                      <Route key={rest.path} {...rest} component={Component} />
              ))

              : routs.filter((e) => !e.isAuthe).map(({ component: Component, ...rest }) => (
               
                  <Route key={rest.path} {...rest} component={Component} />
           ))}
                  <Route path="/selectedItems" component={SelectedItems} />
              </Switch>
          </CartProvider>
      </BrowserRouter>
  );
}
