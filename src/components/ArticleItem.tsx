import Card from "react-bootstrap/Card";
import { ArticleInterface } from "../interfaces/Article";
import { Button, Col } from "react-bootstrap";

interface ArticleProps {
  articleDetails: ArticleInterface;
  onClick: () => void;
}

const ArticleItem = ({ articleDetails, onClick }: ArticleProps) => {
  const formattedDate = new Date(articleDetails.updated_at).toDateString();
  const formattedTime = new Date(articleDetails.updated_at).toLocaleTimeString();

  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="my-2 h-100 rounded-0 border-0">
        <Card.Img variant="top" src={articleDetails.image_url} className="img-fluid card-img rounded-0" />

        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="darkblue fs-6">{articleDetails.title}</Card.Title>
            <Card.Text>
              <span className="small text-secondary">
                Published by <span className="fw-semibold">{articleDetails.news_site}</span>
              </span>
            </Card.Text>
          </div>

          <div>
            <Button variant="secondary" size="sm" className="rounded-0" onClick={onClick}>
              Explore Article
            </Button>
          </div>
        </Card.Body>

        <Card.Footer>
          {formattedDate} at {formattedTime}
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ArticleItem;
