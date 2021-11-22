import React from 'react';
import Input from '../../Input';

export const fields = [
    {
        name: 'email',
        component: Input,
        label: 'Email',
        type: 'email',
        validate: (e) => { if (!e) return 'email is requred'; return ''; },
    },
    {
        name: 'password',
        component: Input,
        label: 'Password',
        type: 'password',
        validate: (e) => { if (!e) return 'password is requred'; return ''; },
    },
];

export const initialLoginValues = {
 email: '',
 password: '',
};
