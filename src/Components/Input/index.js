import React from 'react';
import { TextField } from '@mui/material';

const Input = ({ field, form: { touched, errors }, ...rest }) => {
    return (
        <TextField
          {...field}
          {...rest}
          // eslint-disable-next-line react/prop-types
          error={touched[field.name] && errors[field.name]}
          helperText={touched[field.name] && errors[field.name]}
          variant="outlined"
          fullWidth
          margin="dense"
        />
    );
};

export default Input;
