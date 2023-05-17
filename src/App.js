import React, { useState } from 'react';

const quotes = [
  "The best error message is the one that never shows up. - Thomas Fuchs",
  "Talk is cheap. Show me the code. - Linus Torvalds",
  "It's not a bug, it's an undocumented feature. - Anonymous",
  "Coding is not just code, that is a live thing to serve everyone! - Ming Song",
  "A good programmer is someone who always looks both ways before crossing a one-way street. - Doug Linder",
  "The code you write makes you a programmer. The code you delete makes you a good one. - Mario Fusco",
  "A language that doesn't affect the way you think about programming is not worth knowing. - Alan Perlis",
  "The best thing about a boolean is even if you are wrong, you are only off by a bit. - Anonymous",
  "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime. - Muhammad Waseem",
  "In order to understand recursion, one must first understand recursion. - Anonymous"
];

const RandomQuoteGenerator = () => {
  const [randomQuote, setRandomQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    setRandomQuote(quote);
  };

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <button onClick={generateRandomQuote}>Generate Quote</button>
      {randomQuote && <p>{randomQuote}</p>}
    </div>
  );
};

export default RandomQuoteGenerator;
