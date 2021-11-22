import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.css';
import {
    Toolbar, Box, AppBar, IconButton, Typography,
 Badge,
} from '@mui/material';
import { Menu, AddShoppingCart, ExitToAppOutlined } from '@material-ui/icons';
import { CssBaseline } from '@material-ui/core';
import { CartContext } from '../Context/cartContext';
import { clesrData } from '../utils/storage';

export default function Header({ routs }) {
    const t = sessionStorage.getItem('token');
    const [isLogin, setIsLogin] = useState(!!t);

    const logout = () => {
     clesrData();
       window.location.reload();
    };

    return (
        // <header>
        //     <div>

        //         <div className="logo">
        //             <span>Vardhan</span>
        //         </div>
        //         <nav>
        //             <ul>
        //                 {/* {routs.map((e) => (
        //                     <li key={e.path}>
        //                         <Link to={e.path}>{e.title}</Link>
        //                     </li>
        //   ))} */}
        //                 {isLogin ? routs.filter((e) => e.isAuthe).map((data) => (
        //                     <li key={data.path}>
        //                         <Link to={data.path}>{data.title}</Link>
        //                     </li>

        //                 )) : routs.filter((e) => !e.isAuthe).map((data) => (

        //                     <li key={data.path}>
        //                         <Link to={data.path}>{data.title}</Link>
        //                     </li>

        //                 ))}
        //             </ul>
        //         </nav>
        //     </div>
        // </header>
        <CssBaseline>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                        />
                        <Menu />
                    
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Vardhan
                        </Typography>
                        {isLogin ? routs.filter((e) => e.isAuthe).map((data) => (
                            <li key={data.path}>
                                <Link to={data.path}>{data.title}</Link>
                            </li>

                    )) : routs.filter((e) => !e.isAuthe).map((data) => (

                        <li key={data.path}>
                            <Link to={data.path}>{data.title}</Link>
                        </li>

                    ))}
                        {isLogin && (
                        <>
                            <IconButton
                              size="large"
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              sx={{ mr: 2 }}
                              onClick={logout}
                            >
                                <ExitToAppOutlined />

                            </IconButton>
                        
                            <CartContext.Consumer>
                                {({ cart }) => (
                                    <IconButton
                                      size="large"
                                      edge="start"
                                      color="inherit"
                                      aria-label="menu"
                                  
                                      sx={{ mr: 2 }}
                                    >
                                        <Badge badgeContent={cart.reduce((p, c) => p + c.quantity, 0)} color="error">
                                            <Link to="selectedItems" style={{ color: 'inherit' }}>
                                                {' '}
                                                <AddShoppingCart />
                                            </Link>
                                        </Badge>
                                    </IconButton>
        )}
                            </CartContext.Consumer>
                        </>
                   
)}
                    </Toolbar>
                </AppBar>
            </Box>
        </CssBaseline>
    );
}
