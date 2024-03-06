import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Layout from "./components/layout/Layout";
import { BookStoreThemeProvider } from "./context/themeContext";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: (
      <Layout>
        <Books />
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
  {
    path: "/reset",
    element: (
      <Layout>
        <ResetPassword />
      </Layout>
    ),
  },
  {
    path: "/signin",
    element: (
      <Layout>
        <Signin />
      </Layout>
    ),
  },
  {
    path: '/book/:bookId',
    element: (
      <Layout>
        <BookDetail />
      </Layout>
    )
  }
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
