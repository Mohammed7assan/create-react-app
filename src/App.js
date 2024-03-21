import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Layout} from "./Components/Layout/Layout";
import {Home} from "./Components/Home/Home";
import {Add} from "./Components/Add/Add";
import {Update} from "./Components/Update/Update";
import { Toaster } from "react-hot-toast";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: (
              <Home />
            
          ),
        },
        {
          path: "add",
          element: (
              <Add />
          ),
        },
        
        {
          path: "edit/:id",
          element: (
            
              <Update />
            
          ),
        },
        
      ],
    },
  ]);
  return <>
  <Toaster />
        <RouterProvider router={routers}></RouterProvider>

  
  </>
}

export default App;
