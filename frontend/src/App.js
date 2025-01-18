import { Navbar} from "./components/Navbar/Navbar"
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AddTask from "./components/AddTask/AddTask";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import EditTask from "./components/EditTask/EditTask";
import ErrorPage from "./components/Error/ErrorPage"
import ProtectedRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />, errorElement: <ErrorPage/>,
      children: [
        { path: "/", element: (<ProtectedRoute><HomePage/></ProtectedRoute>) },
        { path: "/addTask", element: (<ProtectedRoute><AddTask/></ProtectedRoute>)},
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/tasks/:id", element: (<ProtectedRoute><EditTask/></ProtectedRoute>)}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
