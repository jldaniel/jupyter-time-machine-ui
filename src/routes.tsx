import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import App from "./App";
import Home from "./Home";
import Upload from "./Upload";
import Notebook from "./Notebook";
import Search from "./Search";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App><Outlet /></App>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/notebook/:notebookId" element={<Notebook />} />
                    <Route path="/search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
