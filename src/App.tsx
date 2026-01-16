import './App.css'
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
        <Routes>
            <Route path={"/"}>
                <Route index element={<HomePage/>}/>
                <Route path={"login"} element={<LoginPage/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
