import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
function App() {
  const dark = {
    background: "#181818",
    color: "#ffffff",
  };

  return (
    <ThemeProvider theme={dark}>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/> }/>
              <Route path='/post' element={<CreatePost/> } /> 
            </Routes>
          </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
