import { SWRConfig } from "swr";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home.jsx";
import GalleryPage from "./Blog.jsx";
import BlogPage from "./Product.jsx";
import NavBar from "./NavBar.jsx";
import SingleBlog from "./SingleBlog.jsx";
import PaginatedImages1 from "./PaginatedImages1.jsx";
import PaginatedImages2 from "./PaginatedImages2.jsx";

// Used this component for the NavBar example
const PageRouter = () => {
  const fetcher = (url) => fetch(url).then(res => res.json());

  return (
    <div>
      {/* <BrowserRouter> */}
        <NavBar />
        <SWRConfig value={{ fetcher }}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/product" element={<BlogPage />}></Route>
            <Route path='/blog/:id' element={<SingleBlog />}></Route>
            <Route path="/blog" element={<GalleryPage />}></Route>
            <Route path="/paginatedimages1" element={<PaginatedImages1 />}></Route>
            <Route path="/paginatedimages2" element={<PaginatedImages2 />}></Route>
          </Routes>
        </SWRConfig>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default PageRouter;
