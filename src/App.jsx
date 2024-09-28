import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/Notfound/Notfound';

const router =createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"home",element:<Home/>},
    {path:"products",element:<Products/>},
    {path:"cart",element:<Cart/>},
    {path:"login",element:<Login/>},
    {path:"register",element:<Register/>}, 
    {path:"*",element:<Notfound/>}
  ]}
])
function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
