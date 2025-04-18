// Displays a section for newly added coffee product collections
// File: NewCollection.jsx



import React, { useState } from "react";
import CollectionCard from "./CollectionCard";

const NewCollection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    {
      background: "radial-gradient(circle, #5D4037, #3E2723)",
      title: "Dark Roast Collection",
      description:
        "Discover our bold and intense dark roast collection, handpicked to energize your mornings. These blends are crafted for those who crave depth and strength in every sip. Enjoy the richness of tradition and taste.",
      image: "./images/velvet-night-decaf.png",
    },
    {
      background: "radial-gradient(circle, #dfc4a6, #b09b83)",
      title: "Light Roast Specials",
      description:
        "Our light roast specials are bright, floral, and easy to drink. Sourced from the finest beans and roasted to preserve natural flavors. Perfect for your mid-day recharge with a clean, smooth finish.",
      image: "./images/choco-spice-brew.png",
    },
    {
      background: "radial-gradient(circle, #dfc4a6, #b09b83)",
      title: "Seasonal Flavors",
      description:
        "Celebrate the season with our rotating collection of limited-edition flavors. From spiced pumpkin to peppermint mocha, enjoy a new adventure with every cup. Only available for a short time.",
      image: "/images/nitro-frost-brew.png",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedCard(prev => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#4E342E] text-white py-10 px-5 text-center min-h-screen">
      <h2 className="text-3xl font-bold mb-8">New Collection</h2>
      <div className="flex flex-col md:flex-row justify-around gap-6">
        {cards.map((card, index) => (
          <CollectionCard
            key={index}
            {...card}
            expanded={expandedCard === index}
            onToggle={() => toggleExpand(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default NewCollection;
