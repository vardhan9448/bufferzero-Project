import React, { Component } from 'react';
import {
    Typography, Card, Box, CardContent, IconButton, CardMedia, Rating, Button, Grid,
} from '@mui/material';
import I18n from 'i18n-js';
import { AddCircle, RemoveCircle, Delete } from '@material-ui/icons';
import { connect } from 'react-redux';
import axiosInstance from './utils/axiosInstance';
import { CartContext } from './Context/cartContext';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
    state = {
        products: [],
        error: null,
        
    }

    async componentDidMount() {
        try {
            const resp = await axiosInstance.get('660/products');
            this.setState({ products: resp });
        } catch (error) {
            this.setState({ error });
        }
    }

    render() {
        const { error, products } = this.state;
        console.log(this.props.store.state1);
        if (error) {
            return (
                <h3>{error.message}</h3>
            );
        }
        
        return (
            <div>
                <button onClick={() => this.props.changeState1('BYE')}>{this.props.state1}</button>
                <button onClick={() => this.props.changeState2('nag')}>{this.props.state2}</button>
                <CartContext.Consumer>
                    {({
 cart, addToCart, updateCart, deletedCart,
}) => (
    <div>
        <Grid sx={{ flexGrow: 1 }} container spacing={0}>
            {products.map((item) => {
                const cartItem = cart.find((e) => e.id === item.id);
                return (
                    <Grid item xs={2} sm={4} md={4} key={item.id}>
                        <Card
                          sx={{
                            display: 'flex', margin: 2, height: 250, padding: 2, backgroundColor: '#f1f3f6',
                        }}
                          key={item.id}
                        >
                            <CardMedia
                              component="img"
                              sx={{ width: 151 }}
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
                                        <Typography component="div" variant="h5">
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
                                    <Rating name="read-only" value={item.rating.rate} precision={0.5} readOnly />

                                    <Typography variant="h6" component="div">{I18n.toCurrency(item.price)}</Typography>
                                    {!cartItem && (
                                    <Button
                                      variant="contained"
                                      onClick={() => addToCart(item)}
                                    >
                                        Add To Cart

                                    </Button>
)}
                                    
                                    {cartItem && (
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        {cartItem.quantity > 1
                                                ? (
                                                    <IconButton
                                                      size="large"
                                                      edge="start"
                                                      color="inherit"
                                                      aria-label="menu"
                                                      sx={{ mr: 2, color: 'blue' }}
                                                      onClick={() => updateCart({
                                                          ...item,
                                                          quantity: cartItem.quantity - 1,
                                                      })}
                                                    >
                                                        <RemoveCircle />
 
                                                    </IconButton>
)

                                         : (
                                             <IconButton
                                               size="large"
                                               edge="start"
                                               color="inherit"
                                               aria-label="menu"
                                               sx={{ mr: 2, color: 'blue' }}
                                               onClick={() => deletedCart(item)}
                                             >
                                                 <Delete />

                                             </IconButton>
)}
                                        {/* <Typography></Typography> */}
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
                                            {' '}
 
                                        </IconButton>
                                    </Box>
                                   )}
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
            </div>
        );
    }
  }
const mapStateToProps = (store) => ({
    store
// state1: store.state1,
// state2: store.state2,
});
const mapDispatchToProps = (dispatch) => ({

    changeState1: (payload) => { dispatch({ type: 'change_state1', payload }); },
    changeState2: (payload) => { dispatch({ type: 'change_state2', payload }); },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
