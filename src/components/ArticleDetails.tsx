import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleInterface } from "../interfaces/Article";
import axios from "axios";
import { Spinner } from "react-bootstrap";

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
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (!article) {
    return <div>Article not found</div>;
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
