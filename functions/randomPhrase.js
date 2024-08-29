const phrases = [
  { scrambled: "A Penny A Earned Saved Is", unscrambled: "A Penny Saved Is A Penny Earned" },
  { scrambled: "Tall Tells Fish A Tale", unscrambled: "A Fish Tells Tall Tales" },
  { scrambled: "Teach Dog Tricks Old New", unscrambled: "You Can’t Teach An Old Dog New Tricks" },
  // Add more phrases here
];

exports.handler = async function(event, context) {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const phrase = phrases[randomIndex];

  return {
    statusCode: 200,
    body: JSON.stringify(phrase),
  };
};
