import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArticleInterface } from "../interfaces/Article";
import axios from "axios";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { GoRocket } from "react-icons/go";

const ArticleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleInterface | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchArticleDetails = async () => {
    try {
      const response = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/${id}/`);
      setArticle(response.data);
      console.log("DATI", response.data);
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticleDetails();
  }, [id]);

  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (!article) {
    return (
      <Container className="mt-5 pt-4">
        <Row className="d-flex justify-content-center">
          <Col className="text-center d-flex flex-column align-items-center" sm={12} md={6} lg={5}>
            <img src="/images/error404.png" alt="lost in space" className="img-fluid" />
            <Link to="/" className="link-container darkblue d-flex align-items-center fs-4">
              <GoRocket className="me-2" />
              Go home, astronaut
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image_url} alt={article.title} />
      <p>{article.summary}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default ArticleDetails;
