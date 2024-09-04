import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
import Login from "./Components/Login/Login";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import './index.css';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/Login", element: <Login /> },
    { path: "/Admin-dashboard", element: <AdminDashboard /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
