import Card from "react-bootstrap/Card";
import { ArticleInterface } from "../interfaces/Article";
import { Col } from "react-bootstrap";

interface ArticleProps {
  articleDetails: ArticleInterface;
  onClick: () => void;
}

const ArticleItem = ({ articleDetails, onClick }: ArticleProps) => {
  const formattedDate = new Date(articleDetails.updated_at).toDateString();
  const formattedTime = new Date(articleDetails.updated_at).toLocaleTimeString();

  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="my-2 h-100 rounded-0" onClick={onClick}>
        <Card.Img variant="top" src={articleDetails.image_url} className="img-fluid card-img rounded-0" />
        <Card.Body>
          <Card.Title className="darkblue ellipsis fw-light">{articleDetails.title}</Card.Title>
          <Card.Text>
            from{" "}
            <a href={articleDetails.url} target="_blank" rel="noopener noreferrer">
              {articleDetails.news_site}
            </a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {formattedDate} at {formattedTime}
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ArticleItem;
