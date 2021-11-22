import React from 'react';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { fields, initialRegisterValues } from './RegisterFields';
import Form from '../../Form';
import axiosInstance from '../utils/axiosInstance';

const styles = makeStyles({
    paper: {
        padding: 30,
        maxWidth: 500,
    },
    container: {
        height: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Register = ({ history }) => {
    const classes = styles();

    const onRegister = async (values, actions) => {
        try {
            const { cpassword, ...rest } = values;
            console.log(rest);
            const res = await axiosInstance.post('register', rest);

            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         Accept: 'application/json',
            //     },
            //     body: JSON.stringify(values),
            // });
            // const data = await res.json();
            // if (!res.ok) throw new Error(data);

            actions.resetForm();
            history.replace('/login');
        } catch (err) {
            actions.setErrors({ err: err.response });
        }
    };
    
    const validation = (values) => {
        const err = {};
        if (values.password !== values.cpassword) { err.cpassword = 'confirm password must be same'; }
        return err;
    };

    return (
        <div className={classes.container}>
            <Paper
              elevation={4}
              className={classes.paper}
            >
                <Form
                  fields={fields}
                  initialValues={initialRegisterValues}
                  validate={validation}
                  onSubmit={onRegister}
                  btn="Register"
                  link="/login"
                  linkText="Login"
                  text="Already a user?"
                  
                />

            </Paper>

        </div>
    );
};
export default Register;
