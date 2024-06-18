import Navbar from "./components/Nav/Navbar.jsx";
import Main from "./Pages/Main/Main";
import ProjectsPage from "./Pages/Project/Projects.page.jsx";
import BlogsPage from "./Pages/Blog/BlogsPage.jsx";
import Pagenotfound from "./Pages/PageNotFound/pagenotfound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProjects } from './utils/features/projects/projectSlice.js';
import { fetchBlogs } from './utils/features/blogs/blogSlice';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
        dispatch(fetchBlogs());
    }, [dispatch]);
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/projects/" element={<ProjectsPage />} />
                    <Route path="/blogs/" element={<BlogsPage />} />
                    <Route path="/*" element={<Pagenotfound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
