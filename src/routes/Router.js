import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import ErrorPage from "../pages/ErrorPage"
import Header from "../components/header"
import ProductPage from "../pages/ProductPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/profile/:name" element={<ProfilePage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}