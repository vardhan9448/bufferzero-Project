import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import {
    Button, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
    root: {
        color: 'red',
    },
    link: {
        textDecoration: 'none',
        marginLeft: 15,
        color: 'green',
        fontWeight: 'bold',
    },
});
const Form = ({ fields, ...rest }) => {
    const classes = styles();
 return (
     <Formik
       {...rest}
     >
         {({ handleSubmit, errors }) => (
             <form onSubmit={handleSubmit}>
                 { !!errors.err && <h2>{errors.err}</h2>}
                 {fields.map((e) => {
                        return (<Field key={e.name} {...e} />);
                    })}

                 <Button variant="contained" fullWidth size="large" type="submit">{rest.btn}</Button>
                 <Typography className={classes.root}>
                     {rest.text}
                     <a href={rest.link} className={classes.link}>{rest.linkText}</a>
                 </Typography>
             </form>
            )}

     </Formik>
    );
};

export default Form;
