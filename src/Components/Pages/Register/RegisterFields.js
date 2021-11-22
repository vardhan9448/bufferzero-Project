import Input from '../../Input';

export const fields = [
    {
        name: 'username',
        component: Input,
        label: 'UserName',
        type: 'text',
        validate: (e) => { if (!e) return 'username is requred'; return ''; },
    },
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
    {
        name: 'cpassword',
        component: Input,
        label: 'ConfirmPassword',
        type: 'password',
        validate: (e) => { if (!e) return 'Confirm Password is requred'; return ''; },
    },
];
export const initialRegisterValues = {
    username: '',
    email: '',
    password: '',
    cpassword: '',
};
