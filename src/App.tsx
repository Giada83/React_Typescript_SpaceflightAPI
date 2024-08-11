import NavBar from "./layout/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleDetails from "./components/ArticleDetails";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path=":id" element={<ArticleDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
