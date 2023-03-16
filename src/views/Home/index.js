import React, { useEffect, useState } from "react";

const Home = () => {
  const [content, setContent] = useState({});

  const getContent = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/homepage-api/description/`
    );
    const data = await response.json();
    setContent(data[0]);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <div>Home</div>
      <div>{content?.description}</div>
    </>
  );
};

export default Home;
