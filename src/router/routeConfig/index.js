import Limit from '../../pages/limit';
import Login from '../../pages/limit/login';
import Register from '../../pages/limit/register';
const routers = [
  {
    path:'/limit',
    component:Limit,
    child:[
      {
        path:'/limit/login',
        component:Login
      },
      {
        path:'/limit/register',
        component:Register
      }
    ]
  }
  
];
export default routers;
