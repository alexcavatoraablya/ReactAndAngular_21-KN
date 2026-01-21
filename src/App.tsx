import './App.css'
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import ContactsPage from "./pages/ContactsPage.tsx";
import DreamsPage from "./pages/DreamsPage.tsx";
import WhatToDoPage from "./pages/WhatToDoPage.tsx";


function App() {

  return (
    <>
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"ContactsPage"} element={<ContactsPage/>}/>
                <Route path={"DreamsPage"} element={<DreamsPage/>}/>
                <Route path={"WhatToDoPage"} element={<WhatToDoPage/>}/>
                <Route path={"login"} element={<LoginPage/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
