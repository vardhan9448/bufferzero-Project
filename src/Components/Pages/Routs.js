import { About } from './About';
import Home from './Home';
import Login from './Login';
import Contact from './Contact';
import Register from './Register';

const routs = [
    {
 exact: true, path: '/', component: Home, title: 'Home', isAuthe: true,
},
    {
 path: '/about', component: About, title: 'About', isAuthe: true,
},
  {
   path: '/login', component: Login, title: 'Login', isAuthe: false,
},

{
path: '/register', component: Register, title: 'Register', isAuthe: false,
   },
    {
 path: '/contact', component: Contact, title: 'Contact', isAuthe: true,
},
// {
//    path: '/login', component: Login, title: 'Logout', isAuthe: true,
//   },
  
];

export default routs;
