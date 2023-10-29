import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ history }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Ambil berita dari API
    axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=920ab4ea830f43589e17261d606a4677")
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Fungsi untuk menampilkan halaman detail berita
  const goToDetail = (id) => {
    history.push(`/news/${id}`);
  };

  return (
    <div>
      <h2>Berita Indonesia</h2>
      <ul>
        {news.map((article) => (
          <li key={article.id}>
            <button onClick={() => goToDetail(article.id)}>{article.title}</button> 
            <button>Save</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
