import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArticleInterface } from "../interfaces/Article";
import axios from "axios";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { GoRocket } from "react-icons/go";
import { RxRocket } from "react-icons/rx";
import NotFound from "./NotFound";

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
      <Container className="mt-5 pt-5">
        <Row className="d-flex justify-content-center">
          <Spinner animation="border" role="status" variant="secondary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      </Container>
    );
  }

  if (!article) {
    return <NotFound />;
  }

  return (
    <Container className="mt-5 pt-md-5 pt-sm-0">
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={9} lg={7} className="bg-light p-3 mb-5">
          <div className="mb-2 d-flex justify-content-between">
            <p className="fs-5 fw-semibold greyblue mb-0">{article.news_site}</p>
            <Link to="/" className="text-secondary fs-6 link-container d-flex align-items-center">
              <RxRocket /> Home
            </Link>
          </div>

          <h2 className="darkblue fw-light fs-3 mb-3">{article.title}</h2>

          <Row>
            <Col sm={12} md={9}>
              <img src={article.image_url} alt="article cover" className="img-fluid mb-3" />
            </Col>
          </Row>

          <p>{article.summary}</p>

          <Button variant="secondary" className="rounded-0" href={article.url}>
            Read Article
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetails;
