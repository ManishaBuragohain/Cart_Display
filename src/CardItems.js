import React, { useState, useEffect } from "react";
import "./CardItems.css";
const CardItems = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <h2>{item.title}</h2>
          <img
            src={item.image}
            alt={` ${item.image}`}
            style={{ width: "10rem", marginTop: "20px" }}
          />
          <p>{item.description}</p>
          <p className="price">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CardItems;
