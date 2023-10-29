import React, { useState, useEffect } from "react";
import "./styles.css";

const SavedNews = () => {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    // Load saved news from localStorage
    const savedNewsData = localStorage.getItem("savedNews");
    if (savedNewsData) {
      setSavedNews(JSON.parse(savedNewsData));
    }
  }, []);

  const unSaveNews = (article) => {
    // Hapus berita dari daftar yang disimpan
    const updatedSavedNews = savedNews.filter((savedArticle) => savedArticle.title !== article.title);
    localStorage.setItem("savedNews", JSON.stringify(updatedSavedNews));
    setSavedNews(updatedSavedNews);
  };

  return (
    <div>
      <h2>Berita yang Disimpan</h2>
      <table>
        <thead>
          <tr>
            <th>Judul Berita</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          {savedNews.map((article, index) => (
            <tr key={index}>
              <td>{article.title}</td>
              <td>
                <button onClick={() => unSaveNews(article)}>Un-Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedNews;
