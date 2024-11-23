import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Trangchu from "./Login/Trangchu.jsx";
import HomePages from "./Home/HomePages.jsx";
import Products from "./Products/Products.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Products/>
    </StrictMode>
);
