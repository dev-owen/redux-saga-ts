import React from 'react';
import Button from "./components/Button";
import Loading from "./components/Loading";
import NewsItem from "./components/NewsItem";

function App() {
  return (
    <div>
      <Button />
      <Loading />
      <NewsItem />
    </div>
  );
}

export default App;
