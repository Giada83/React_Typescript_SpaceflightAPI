import Card from "react-bootstrap/Card";
import { ArticleInterface } from "../interfaces/Article";

interface ArticleProps {
  articleDetails: ArticleInterface;
}

const ArticleItem = ({ articleDetails }: ArticleProps) => {
  return (
    <Card className="my-2">
      <Card.Img variant="top" src={articleDetails.image_url} />
      <Card.Body>
        <Card.Title>{articleDetails.title}</Card.Title>
        <Card.Text>
          <a href={articleDetails.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleItem;
