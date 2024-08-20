// src/components/Quote/Quote.js
import React from "react";
import mockQuoteData from "../../mockData/quotes";

const Quote = () => {
  const { content, author } = mockQuoteData;

  return (
    <div>
      <h2>Inspirational Quote</h2>
      <blockquote>
        "{content}" - <em>{author}</em>
      </blockquote>
    </div>
  );
};

export default Quote;
