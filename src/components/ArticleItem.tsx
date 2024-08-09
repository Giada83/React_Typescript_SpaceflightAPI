import Card from "react-bootstrap/Card";
import { ArticleInterface } from "../interfaces/Article";
import { Col } from "react-bootstrap";

interface ArticleProps {
  articleDetails: ArticleInterface;
  onClick: () => void;
}

const ArticleItem = ({ articleDetails, onClick }: ArticleProps) => {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="my-2 h-100" onClick={onClick}>
        <Card.Img variant="top" src={articleDetails.image_url} className="img-fluid card-img" />
        <Card.Body>
          <Card.Title>{articleDetails.title}</Card.Title>
          <Card.Text>
            <a href={articleDetails.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleItem;
