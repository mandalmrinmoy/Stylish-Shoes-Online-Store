import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Contacts from "./pages/Contacts"
import Login from "./pages/Login"
import TopNavbar from "./components/TopNavbar"
import Navbar from "./components/Navbar"
import Man from "./pages/Man"
import Woman from "./pages/Woman"
import Page from "./pages/Page"
import Shop from "./pages/Shop"
import Sale from "./pages/Sale"
import Footer from "./components/footer"
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<div>
        <TopNavbar/>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    },
    {
      path:'/cart',
      element:<div>
        <TopNavbar/>
        <Navbar/>
        <Cart/>
      </div>
    },
    {
      path:'/contact',
      element:<div>
         <TopNavbar/>
         <Navbar/>
        <Contacts/>
      </div>
    },
    {
      path:'/login',
      element:<div>
         {/* <TopNavbar/>
         <Navbar/> */}
        <Login/>
      </div>
    },
    {
      path:'/man',
      element:<div>
         <TopNavbar/>
         <Navbar/>
        <Man/>
        <Footer/>
      </div>
    },
    {
      path:'/woman',
      element:<div>
         <TopNavbar/>
         <Navbar/>
        <Woman/>
        <Footer/>
      </div>
    },
    {
      path:'/page',
      element:<div>
         <TopNavbar/>
         <Navbar/>
        <Page/>
        <Footer/>
      </div>
    },
    {
      path:'/shop',
      element:<div>
         <TopNavbar/>
         <Navbar/>
        <Shop/>
        <Footer/>
      </div>
    },
    {
      path:'/sale',
      element:<div>
         <TopNavbar/>
         <Navbar/>
        <Sale/>
        <Footer/>
      </div>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
