/* eslint-disable react/prefer-stateless-function */
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import {
    Card, Typography, Box, CardContent, CardMedia, Grid, Button, IconButton, Paper,
} from '@mui/material';
import I18n from 'i18n-js';
import React, { Component } from 'react';
import { CartContext } from '../Context/cartContext';

class SelectedItems extends Component {
    render() {
        return (
            <Box>
                <CartContext.Consumer>
             
                    {({
                    cart, updateCart, deletedCart,
                }) => (
                    <div>
                        <Grid container>
                            {cart.map((item) => {
                                const cartItem = cart.find((e) => e.id === item.id);
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                                        <Card
                                          sx={{
                                                display: 'flex', margin: 1.5, height: 250, padding: 2, backgroundColor: '#f1f3f6',
                                            }}
                                          key={item.id}
                                        >
                                            <CardMedia
                                              component="img"
                                              sx={{ width: 170 }}
                                              image={item.image}
                                              alt={item.title}
                                            />
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <CardContent sx={{ flex: '1 0 auto' }}>
                                                    <Box
                                                      component="div"
                                                      overflow="hidden"
                                                      whiteSpace="pre-line"
                                                      textOverflow="ellipsis"
                                                      height={30}
                                                    >
                                                        <Typography component="div" variant="h5" style={{ fontWeight: 'bold' }}>
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                    <Box
                                                      component="div"
                                                      overflow="hidden"
                                                      whiteSpace="pre-line"
                                                      textOverflow="ellipsis"
                                                      height={60}
                                                    >
                                                        <Typography
                                                          sx={{
                                                                overflow: 'hidden',
                                                            }}
                                                          variant="subtitle1"
                                                          color="text.secondary"
                                                          component="div"
                                                        >
                                                            {item.description}
                                                        </Typography>
                                                    </Box>

                                                    <Typography variant="h6" component="div">{I18n.toCurrency(item.price * item.quantity)}</Typography>

                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Typography variant="h6">Quantity :</Typography>

                                                        <IconButton
                                                          size="large"
                                                          edge="start"
                                                          color="inherit"
                                                          aria-label="menu"
                                                          disabled={item.quantity < 2}
                                                          sx={{ mr: 2, color: 'blue' }}
                                                          onClick={() => updateCart({
                                                                ...item,
                                                                quantity: cartItem.quantity - 1,
                                                            })}
                                                        >
                                                            <RemoveCircle />
                                                        </IconButton>
                                                        <Typography component="div" variant="h5">
                                                            {cartItem.quantity}
                                                        </Typography>
                                                        <IconButton
                                                          size="large"
                                                          edge="start"
                                                          color="inherit"
                                                          aria-label="menu"
                                                          sx={{ ml: 2, color: 'blue' }}
                                                          onClick={() => updateCart({
                                                                ...item,
                                                                quantity: cartItem.quantity + 1,
                                                            })}
                                                        >
                                                            <AddCircle />
                                                        </IconButton>

                                                    </Box>

                                                    <Box component="div">
                                                        <Button variant="contained" color="warning" onClick={() => deletedCart(item)}>Remove</Button>
                                                    </Box>
                                                </CardContent>
                                                <Box sx={{
                                                    display: 'flex', alignItems: 'center', pl: 1, pb: 1,
                                                }}
                                                />
                                            </Box>

                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </div>
                )}
               
                </CartContext.Consumer>
                <Paper elevation={3} style={{ height: 50 }}>
                    <Typography variant="h4" style={{ textAlign: 'right' }}>
                        <Button
                          variant="contained"
                          color="success"
                          sx={{ width: 200, borderRadius: 10 }}
                        >
                            Place Order

                        </Button>

                    </Typography>
                </Paper>
            </Box>
        );
    }
}
export default SelectedItems;
