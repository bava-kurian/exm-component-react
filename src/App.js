import React from "react";
import Card from "./components/card";
import { formatDate } from "./utils/format";
import "./style.css";

function App() {
  const handleButtonClick = (name) => {
    alert(`You clicked on ${name}'s card`);
  };

  const cardData = [
    {
      title: "User 1",
      description: `Joined on ${formatDate("2023-12-01")}`,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "User 2",
      description: `Joined on ${formatDate("2024-01-15")}`,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "User 3",
      description: `Joined on ${formatDate("2024-02-10")}`,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="App">
      <h1>Reusable Components Demo</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            buttonText="Click Me"
            onButtonClick={() => handleButtonClick(card.title)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
