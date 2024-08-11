import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // gestisce la navigazione all'interno dell'app.
import { Container, Row, Button, Col } from "react-bootstrap";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { ArticleInterface } from "../interfaces/Article"; //interfaccia
import ArticleItem from "./ArticleItem"; // componente usato per mostrare ogni articolo.

const ArticleList = () => {
  // Stato per memorizzare gli articoli caricati dall'API.
  const [articles, setArticles] = useState<ArticleInterface[]>([]);

  // Stato per memorizzare l'URL della prossima pagina di articoli, inizialmente nullo.
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  // Stato per memorizzare l'URL della pagina precedente di articoli, inizialmente nullo.
  const [prevUrl, setPrevUrl] = useState<string | null>(null);

  // URL iniziale per il reset
  const initialUrl = "https://api.spaceflightnewsapi.net/v4/articles/?limit=6";

  // Stato per memorizzare l'URL della pagina corrente, inizialmente impostato sull'URL della prima pagina.
  const [currentUrl, setCurrentUrl] = useState<string>("https://api.spaceflightnewsapi.net/v4/articles/?limit=6");

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const fetchArticles = async (url: string) => {
    try {
      setLoading(true); // Imposta `loading` a true per indicare che il caricamento è in corso.
      const response = await axios.get(url); // Effettua una richiesta GET all'URL fornito.
      setArticles(response.data.results); // Aggiorna lo stato `articles` con i risultati ottenuti.
      setNextUrl(response.data.next); // Aggiorna lo stato `nextUrl` con l'URL della prossima pagina.
      setPrevUrl(response.data.previous); // Aggiorna lo stato `prevUrl` con l'URL della pagina precedente.
    } catch (e) {
      console.log("ERROR", e);
    } finally {
      setLoading(false); // Imposta `loading` a false al termine della richiesta.
    }
  };

  // Carica gli articoli ogni volta che l'URL corrente cambia
  useEffect(() => {
    fetchArticles(currentUrl);
  }, [currentUrl]);

  // Funzione per passare alla pagina successiva.
  const handleNextPage = () => {
    if (nextUrl) {
      setCurrentUrl(nextUrl); // Se esiste un `nextUrl`, aggiorna `currentUrl` attivando `useEffect` per caricare la pagina successiva.
      window.scrollTo(0, 0); //scroll in alto
    }
  };

  // Funzione per tornare alla pagina precedente.
  const handlePrevPage = () => {
    if (prevUrl) {
      setCurrentUrl(prevUrl);
      window.scrollTo(0, 0);
    }
  };

  // Funzione per tornare alla pagina iniziale
  const handleResetPage = () => {
    setCurrentUrl(initialUrl);
    window.scrollTo(0, 0);
  };

  // Naviga alla pagina dell'articolo specifico usando il suo ID.
  const cardClick = (articleId: number) => {
    navigate(`${articleId}`);
  };

  return (
    <Container className="mt-5 pt-4">
      {/* Mostra il loader solo durante il caricamento */}
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          {/* card */}
          <Row className="gy-3 mb-4">
            {articles.map((article) => (
              <ArticleItem key={article.id} articleDetails={article} onClick={() => cardClick(article.id)} />
            ))}
          </Row>

          {/* pagination */}
          {!loading && (prevUrl || nextUrl) && (
            <Row className="mb-3 d-flex justify-content-between">
              <Col xs={6}>
                <Button onClick={handleResetPage} disabled={loading} className="reset-button">
                  First Page
                </Button>
              </Col>
              <Col xs={6} className="d-flex">
                <div className="ms-auto">
                  <Button onClick={handlePrevPage} disabled={!prevUrl || loading} className="me-2 icon-button darkblue">
                    <FaRegArrowAltCircleLeft className="icon-size" />
                  </Button>
                  <Button onClick={handleNextPage} disabled={!nextUrl || loading} className="icon-button darkblue">
                    <FaRegArrowAltCircleRight className="icon-size" />
                  </Button>
                </div>
              </Col>
            </Row>
          )}
        </>
      )}
    </Container>
  );
};

export default ArticleList;
