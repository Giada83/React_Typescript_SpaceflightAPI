import NavBar from "./layout/NavBar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Container>
          <h1>Space Portal</h1>
          <ArticleList />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
