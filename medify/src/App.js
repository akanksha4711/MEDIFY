import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../src/pages/Home/Home";
import MyBookings from "../src/pages/MyBookings/MyBookings";
import Search from "../src/pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/search",
    element: <Search/>,
  },
  {
    path: "/mybookings",
    element: <MyBookings/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
