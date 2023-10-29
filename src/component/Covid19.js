import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [news, setNews] = useState([]);
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    // Fetch news from the API
    axios
      .get("https://newsapi.org/v2/everything?q=COVID-19&apiKey=920ab4ea830f43589e17261d606a4677")
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });

    // Load saved news from localStorage
    const savedNewsData = localStorage.getItem("savedNews");
    if (savedNewsData) {
      setSavedNews(JSON.parse(savedNewsData));
    }
  }, []);

  const saveNews = (article) => {
    // Check if the article is already saved
    if (!savedNews.find((savedArticle) => savedArticle.title === article.title)) {
      const updatedSavedNews = [...savedNews, article];
      localStorage.setItem("savedNews", JSON.stringify(updatedSavedNews));
      setSavedNews(updatedSavedNews);
    }
  };

  // eslint-disable-next-line no-unused-vars
const unSaveNews = (article) => {
  const updatedSavedNews = savedNews.filter((savedArticle) => savedArticle.title !== article.title);
  localStorage.setItem("savedNews", JSON.stringify(updatedSavedNews));
  setSavedNews(updatedSavedNews);
};

  
  return (
    <div className="centered-content">
    <h1>News</h1>
    <div className="news-container">
      {news.map((article, index) => (
        <div className="news-item" key={index}>
          <p>{article.source.name}</p>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <span className="button-box">News Page</span>
          </a>
          <button className="button" onClick={() => saveNews(article)}>
            Save
          </button>
        </div>
      ))}
    </div>
  </div>
);
};

export default Home;
