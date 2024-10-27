import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/main';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import UserDetails from './Components/UserDetails/UserDetails';

function App() {
//http://localhost:5173/ == /
const router = createBrowserRouter([
  {
    path:"/",
    element: <Main></Main>,
    children: [
      {
        path:"/", 
        element: <Home></Home>,
      },
      {
        path:"/about",
        element: <About></About>,
        loader: async () => {
          return await fetch ("https://jsonplaceholder.typicode.com/users");

        },
      },
      {
        path:"/details/:id",
        element: <UserDetails></UserDetails>,
        loader: async ({params})=> {
          return await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        }
        
        },
      
    ],
  },

]);


return (
<div>
  <RouterProvider router={router}></RouterProvider>
</div>
    );  
  }

export default App;
