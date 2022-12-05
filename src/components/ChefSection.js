import React from "react";
import ChefCard from "./ChefCard";

export default function ChefSection() {
  const chefs = [
    {
      name: "Juan Carlos",
      img: "/img/top-chefs/img_1.jpg",
      recipeCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "John Doe",
      img: "/img/top-chefs/img_2.jpg",
      recipeCount: "05",
      cuisine: "Japanese",
    },
    {
      name: "Ericj Maria",
      img: "/img/top-chefs/img_3.jpg",
      recipeCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Chris Brown",
      img: "/img/top-chefs/img_4.jpg",
      recipeCount: "08",
      cuisine: "American",
    },
    {
      name: "Blake Lively",
      img: "/img/top-chefs/img_5.jpg",
      recipeCount: "09",
      cuisine: "French",
    },
    {
      name: "Joe Clark",
      img: "/img/top-chefs/img_6.jpg",
      recipeCount: "15",
      cuisine: "Spanish",
    },
  ];

  return (
    <div className="section chefs">
      <h1 className="title">Our Top Chefs</h1>
      <div className="top-chefs-container">
        {chefs.map((chef) => (
          <ChefCard key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
}
