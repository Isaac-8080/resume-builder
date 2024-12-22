import './App.css'
import Home from "./Pages/Home"
import TemplatesPage from "./Pages/TemplatesPage"
import TemplateOne from './Pages/TemplateOne'
import TemplateTwo from './Pages/TemplateDetail'
import PageNotFound from "./Pages/PageNotFound"
import RootLayout from "./Layouts/RootLayout"
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="templates" element={<TemplatesPage /> } />
        <Route path="templates/templateOne" element={<TemplateOne />} />
        <Route path="templates/templateTwo" element={<TemplateTwo />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
  
}

export default App
