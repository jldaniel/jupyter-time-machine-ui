import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Upload from "./Upload";
import Notebook from "./Notebook";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/notebook" element={<Notebook />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
