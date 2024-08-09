import axios from "axios";
import { ArticleInterface } from "../interfaces/Article";
import { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const ArticleList = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    try {
      const response = await axios.get("https://api.spaceflightnewsapi.net/v4/articles/");
      setArticles(response.data.results);
      console.log("DATI", response.data.results);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const cardClick = (articleId: number) => {
    navigate(`${articleId}`);
  };

  return (
    <Container>
      <h1>Space Portal</h1>
      <Row className="gy-3">
        {articles.map((article) => (
          <ArticleItem key={article.id} articleDetails={article} onClick={() => cardClick(article.id)} />
        ))}
      </Row>
    </Container>
  );
};

export default ArticleList;
