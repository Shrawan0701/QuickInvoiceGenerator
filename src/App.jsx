import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import PreviewPage from "./pages/PreviewPage.jsx";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard.jsx";
import Menubar from "./components/Menubar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";



const App = () => {
  return (
    <BrowserRouter>
    <Menubar/>
    <Toaster/>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/generate" element={<MainPage/>} />
      <Route path="/preview" element={<PreviewPage/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;