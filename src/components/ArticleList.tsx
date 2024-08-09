import axios from "axios";
import { ArticleInterface } from "../interfaces/Article";
import { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);

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

  return (
    <div>
      {articles.map((article) => (
        <ArticleItem key={article.id} articleDetails={article} />
      ))}
    </div>
  );
};

export default ArticleList;
