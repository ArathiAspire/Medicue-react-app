import "./App.css";
import Home from "./components/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import SignUp from "./pages/SignUp";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Registration from "./pages/Registration";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "signup", element: <SignUp /> },
        { path: "services", element: <Services /> },
        { path: "doctors", element: <Doctors /> },
        { path: "register", element: <Registration /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
