import React, { useEffect } from 'react';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { fields, initialLoginValues } from './LoginField';
import Form from '../../Form';
import axiosInstance from '../utils/axiosInstance';
import { storedData, clesrData } from '../utils/storage';

const useStyles = makeStyles({

    paper: {
        flex: 1,
        maxWidth: 500,
        padding: 20,
    },
    container: {
        height: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
const Login = ({ history }) => {
    const classes = useStyles();
    clesrData();
    const onLogin = async (values, actions) => {
        try {
            const resp = await axiosInstance.post('login', values);
            storedData(resp);
            actions.resetForm();
            history.replace('/');
            window.location.reload();
        } catch (err) {
            actions.setErrors({ err: err.response });
        }
    };
    return (

        <div className={classes.container}>
            <Paper
              elevation={3}
              className={classes.paper}
            >
                <Form
                  fields={fields}
                  initialValues={initialLoginValues}
                  onSubmit={onLogin}
                  btn="Login"
                  link="/register"
                  linkText="Register"
                  text="Not a user?"
                />
            </Paper>

        </div>

    );
};
export default Login;
